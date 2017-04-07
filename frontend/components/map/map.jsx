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
    this.renderSecondHeatmap = this.renderSecondHeatmap.bind(this);
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
    this.props.requestAllCrimes();
    this.props.requestAllTransit();
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

  renderSecondHeatmap(filter, gradient){
    return(<HeatmapLayer
      points={filter}
      radius={20}
      gradient={gradient}
      longitudeExtractor={m => m[1]}
      latitudeExtractor={m => m[0]}
      intensityExtractor={m => parseFloat(m[2])}
      blur={30}/>)
  }

  render() {

    const position = [this.state.lat, this.state.lng];

  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);

    const blue_gradient = {
      0.1: 'rgba(0,0,238,.01)', 0.2: 'rgba(0,0,238,.02)', 0.4: 'rgba(0,0,238,.04)',
      0.6: 'rgba(0,0,238,.06)', 0.8: 'rgba(0,0,238,.08)', 1.0: 'rgba(0,0,238,.1)',
    };

    const red_gradient = {
      0.1: 'rgba(40,0,0,.01)', 0.2: 'rgba(80,0,0,.02)', 0.4: 'rgba(120,0,0,.04)',
      0.6: 'rgba(160,0,0,.06)', 0.8: 'rgba(200,0,0,.08)', 1.0: 'rgba(238,0,0,.1)',
    };

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

      const transit = this.props.allTransit.map(el => ([el.stop_lat, el.stop_lon, this.state.transitFavorabilityScore]))
      const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, this.state.restaurantFavorabilityScore]))
      const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, this.state.crimeFavorabilityScore]))
      let ranks = [crimes, restaurants];
      return (
        <div className="map-container">
          <Map
            style={{height: "100vh"}}
            center={position}
            zoom={3}
            bounds={bounds}
            onClick={this.handleMapClick}
            scrollWheelZoom= {this.state.clicked}>

            <HeatmapLayer
              points={ranks[1]}
              radius={20}
              gradient={blue_gradient}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
              blur={30}/>

              <HeatmapLayer
                points={ranks[0]}
                radius={20}
                gradient={red_gradient}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])}
                blur={30}/>

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
