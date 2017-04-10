import React from 'react';
import { render } from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { Popover } from 'react-bootstrap';

import {esri} from 'esri-leaflet-geocoder'
import { hashHistory } from 'react-router';
import SideBarContainer from '../sidebar/sidebar_container';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 37.763178,
      lng: -122.446836,
      zoom: 20,
      maxIntensity: 3,
      crimeFavorabilityScore: 40,
      transitFavorabilityScore: 40,
      restaurantFavorabilityScore: 40,
      clicked: false,
      clickLatLng: {
        lat: 51,
        lng: -0.09,
      },
    };

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.renderHeatmap = this.renderHeatmap.bind(this);
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
    this.props.requestAllCrimes();
    this.props.requestAllTransit();
  }

  componentWillReceiveProps(newProps){
    if (newProps.ranks.length > 0 ) {
      this.setState({
        ranks: newProps.ranks,
        newRanks: false,
      })
    } else if (this.state.ranks && newProps.ranks != this.state.ranks) {
      this.setState({
        ranks: newProps.ranks,
        newRanks: true,
      })
    }
  }

  handleMapClick(e){
    this.setState({
      clickLatLng: e.latlng,
      clicked: true,
    })
  }

  handleMarkerClick(e){
    // if (
    //   this.state.clickLatLng.lat < 37.723597 ||
    //   this.state.clickLatLng.lat > 37.807155 ||
    //   this.state.clickLatLng.lng < -122.521630 ||
    //   this.state.clickLatLng.lng > -122.351775
    // ) {
    //   window.alert('OUTSIDE OF BOUNDS');
    // } else {
      hashHistory.push('/search')

      // debugger;
      // L.esri.Geocoding.reverseGeocode()
      // .latlng([this.state.clickLatLng.lat, this.state.clickLatLng.lng])
      // .run(function(error, result, response){
      //   debugger;
      // // callback is called with error, result, and raw response.
      // // result.latlng contains the coordinates of the located address
      // // result.address contains information about the match
      // });
      this.props.requestFilteredCrimes(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
      this.props.requestFilteredTransitData(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
      this.props.requestFilteredRestaurants(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
      this.setState({
        clicked: false,
      })
      let target = $('.bubble-chart');
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    // }
  }

  renderHeatmap(ranks){
    // React.unmountComponentAtNode(document.getElementById('heatmap-0'));
    // React.unmountComponentAtNode(document.getElementById('heatmap-1'));
    const green_gradient = {
      0.1: 'rgba(255, 255, 204, .04)', 0.2: 'rgba(217, 240, 163, .04)', 0.4: 'rgba(173, 221, 142, .04)',
      0.6: 'rgba(120, 198, 121, .06)', 0.8: 'rgba(49, 163, 84, .08)', 1.0: 'rgba(0, 104, 55, .1)',
    };
    const purple_gradient = {
      0.1: 'rgba(254,235,226, .04)', 0.2: 'rgba(252,197,192, .04)', 0.4: 'rgba(250,159,181,.04)',
      0.6: 'rgba(247,104,161,.06)', 0.8: 'rgba(197,27,138,.08)', 1.0: 'rgba(122,1,119,.1)',
    };
    const red_gradient = {
      0.1: 'rgba(254,229,217,.04)', 0.2: 'rgba(252,187,161,.04)', 0.4: 'rgba(252,146,114,.04)',
      0.6: 'rgba(251,106,74,.06)', 0.8: 'rgba(222,45,38,.08)', 1.0: 'rgba(165,15,21,.2)',
    };
    const no_gradient = {
      0.1: 'rgba(0,0,0,0)', 1: 'rgba(0,0,0,0)'
    };

    const gradientKey = {
      "crimes": red_gradient,
      "restaurants": purple_gradient,
      "transitStops": green_gradient,
    }
    let layers;
    let gradients;
    if (ranks.length > 1) {
      gradients = this.state.ranks.map((rank, idx) =>
        gradientKey[rank]
      )
      return (
        ranks.reverse().map((rank, idx) => (<HeatmapLayer
        key={idx}
        points={rank}
        radius={20}
        gradient={gradients[idx]}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        blur={30}/>)))
    } else if (ranks.length === 1) {
      gradients = [no_gradient, gradientKey[this.state.ranks[0]]]
      let data = [[37.796509, -122.453212, 0], ranks[0]]
      return (
        data.map((datum, idx) => (<HeatmapLayer
        points={datum}
        key={idx}
        radius={20}
        gradient={gradients[idx]}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        blur={30}/>)))
    }

    // let layers = ranks.map((rank, idx) => {
    //   return(<HeatmapLayer
    //     key={idx}
    //     id={`heatmap-${idx}`}
    //     points={rank}
    //     radius={20}
    //     gradient={gradients[idx]}
    //     longitudeExtractor={m => m[1]}
    //     latitudeExtractor={m => m[0]}
    //     intensityExtractor={m => parseFloat(m[2])}
    //     blur={30}/>)
    // });
    // return layers;
  }

  render() {
    const position = [this.state.lat, this.state.lng];
  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);


    // 213,62,79
    // 252,141,89
    // 254,224,139
    // 230,245,152
    // 153,213,148
    // 50,136,18
    // <HeatmapLayer
    //   points={this.state.rank[1]}
    //   radius={20}
    //   gradient={blue_gradient}
    //   longitudeExtractor={m => m[1]}
    //   latitudeExtractor={m => m[0]}
    //   intensityExtractor={m => parseFloat(m[2])}
    //   blur={30}/>
    //
    //   <HeatmapLayer
    //     points={this.state.rank[0]}
    //     radius={20}
    //     gradient={red_gradient}
    //     longitudeExtractor={m => m[1]}
    //     latitudeExtractor={m => m[0]}
    //     intensityExtractor={m => parseFloat(m[2])}
    //     blur={30}/>
    const icon = L.icon({
       className: 'my-div-icon',
       iconSize: [30, 50],
       iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-icon-2x.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-shadow.png',
    });
    const popup = L.popup(

    )
    const marker = this.state.clicked ? (
     <Marker position={this.state.clickLatLng} icon={icon} onClick={this.handleMarkerClick}>
      <Popup>
        <span className="marker-content">A pretty CSS3 popup.<br/>Easily customizable.</span>
      </Popup>
     </Marker>
   ) : null

    if (!(this.props.allRestaurants instanceof Array) || !(this.props.allCrimes instanceof Array) || !(this.props.allTransit instanceof Array)) {
      return(<div></div>)
    } else {

      const transitStops = this.props.allTransit.map(el => ([el.stop_lat, el.stop_lon, this.state.transitFavorabilityScore]))
      const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, this.state.restaurantFavorabilityScore]))
      const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, this.state.crimeFavorabilityScore]))
      let data;
      if (this.state.ranks) {
        data = this.state.ranks.map((rank) => eval(rank));
      }
      return (
        <div className="map-container">
          <Map
            style={{height: "100vh"}}
            center={position}
            zoom={13}
            onClick={this.handleMapClick}
            scrollWheelZoom={this.state.clicked}>

            {this.state.ranks || this.state.newRanks === true ? this.renderHeatmap(data) : null }

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://api.mapbox.com/styles/v1/hellosweta/cj12k3v5n004l2rt89a28igfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'/>
            {marker}
          </Map>
          <DragDropContextProvider backend={HTML5Backend}>
            <SideBarContainer />
          </DragDropContextProvider>

        </div>
      );
    }
  }
}

export default LeafletMap;
