import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
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
    if (newProps.rank != this.props.rank) {
      this.setState({
        rank: newProps.rank
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
    hashHistory.push('/search')
    this.props.requestFilteredCrimes(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
    this.props.requestFilteredTransitData(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
    this.props.requestFilteredRestaurants(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
    let target = $('.bubble-chart');
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }

  renderHeatmap(rank, gradients){
    let layers = rank.map((rank, idx) => {
      return(<HeatmapLayer
        key={idx}
        points={rank}
        radius={20}
        gradient={gradients[idx]}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        blur={30}/>)
    });
    return layers;
  }

  render() {

    const position = [this.state.lat, this.state.lng];

  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);

    const blue_gradient = {
      0.1: 'rgba(213,62,79,.1)', 0.2: 'rgba(252,141,89,.08)', 0.4: 'rgba(254,224,139,.06)',
      0.6: 'rgba(230,245,152,.04)', 0.8: 'rgba(153,213,148,.02)', 1.0: 'rgba(50,136,18,.01)',
    };

    const red_gradient = {
      0.1: 'rgba(50,136,18,.01)', 0.2: 'rgba(153,213,148,.02)', 0.4: 'rgba(230,245,152,.04)',
      0.6: 'rgba(254,224,139,.06)', 0.8: 'rgba(252,141,89,.08)', 1.0: 'rgba(213,62,79,.1)',
    };
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
    const marker = this.state.clicked ? (
     <Marker position={this.state.clickLatLng} icon={icon} onClick={this.handleMarkerClick}>
       <Popup>
         <span>Click for More Details</span>
       </Popup>
     </Marker>
   ) : null

    if (!(this.props.allRestaurants instanceof Array) || !(this.props.allCrimes instanceof Array) || !(this.props.allTransit instanceof Array)) {
      return(<div></div>)
    } else {

      const transitStops = this.props.allTransit.map(el => ([el.stop_lat, el.stop_lon, this.state.transitFavorabilityScore]))
      const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, this.state.restaurantFavorabilityScore]))
      const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, this.state.crimeFavorabilityScore]))
      let gradients = [blue_gradient, red_gradient]

      return (
        <div className="map-container">
          <Map
            style={{height: "100vh"}}
            center={position}
            zoom={3}
            bounds={bounds}
            onClick={this.handleMapClick}
            scrollWheelZoom= {this.state.clicked}>

            {this.state.rank ? this.renderHeatmap([eval(this.state.rank[0]), eval(this.state.rank[0])], gradients): null}


            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://api.mapbox.com/styles/v1/hellosweta/cj12k3v5n004l2rt89a28igfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'/>
            {marker}
        </Map>

        <SideBarContainer />
        </div>
      );
    }
  }
}

export default LeafletMap;
