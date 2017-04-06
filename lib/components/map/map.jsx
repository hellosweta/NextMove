import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { hashHistory } from 'react-router';
// import SideBarContainer from '../sidebar/sidebar_container';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 37.763178,
      lng: -122.446836,
      zoom: 20,
      maxIntensity: 5,
      crimeFavorabilityScore: 0,
      transitFavorabilityScore: 0,
      restaurantFavorabilityScore: 0,
      clicked: false,
      clickLatLng: {
        lat: 51,
        lng: -0.09,
      },
    };
    this.getIntensity = this.getIntensity.bind(this);
    this.getWeights = this.getWeights.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
    this.props.requestAllCrimes();
    this.props.requestAllTransit();
  }
  getWeights(){
    // const ranks = ["crimes", "restaurants", "transit"];
    // const ranks = ["restaurants", "transit", "crimes"];
    const ranks = ["transit", "crimes", "restaurants"];
    let intensitycrimes = 0;
    let intensitytransit = 0;
    let intensityrestaurants = 0;
    ranks.forEach((filter, idx) => {
      if (ranks.length === 3) {
        const weights = [.5, .3, .2]
        eval("intensity" + filter + `=${this.state.maxIntensity * weights[idx]}`);
      }

    });
    this.getIntensity(intensitycrimes, intensitytransit, intensityrestaurants)
  }

  handleMapClick(e){
    this.setState({
      clickLatLng: e.latlng,
      clicked: true,
    })
  }
  handleMarkerClick(e){
    hashHistory.push('search')
  }

  getIntensity(crimeIntensity, transitIntensity, restaurantIntensity){
    let factor = 1.5;
    let minimum = Math.min(this.props.allRestaurants.length, this.props.allCrimes.length, this.props.allTransit.length)
    this.state.crimeFavorabilityScore = (1/this.props.allCrimes.length) * minimum * crimeIntensity * factor
    this.state.transitFavorabilityScore = (1/this.props.allTransit.length) * minimum * transitIntensity * factor
    this.state.restaurantFavorabilityScore = (1/this.props.allRestaurants.length) * minimum * restaurantIntensity * factor
  }

  render() {
    const position = [this.state.lat, this.state.lng];

  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);
    // const gradient = {
    //   0.4: '#471967', 0.8: '#258E8C', 1: '#E2E32D'
    // };
    const gradient = {
      0.1: '#89BDE0', 0.2: '#96E3E6', 0.4: '#82CEB6',
      0.6: '#FAF3A5', 0.8: '#F5D98B', 1.0: '#DE9A96',
    };
    // const gradient = {
    //   0.1: '#E0EBF6', 0.2: '#E0EBF6', 0.4: '#BDDBEA',
    //   0.6: '#99C7E2', 0.8: '#7EB3D6', 1.0: '#5587B8'
    // };
    const inverse_gradient = {
      1.0: '#89BDE0', 0.8: '#96E3E6', 0.6: '#82CEB6',
      0.4: '#FAF3A5', 0.2: '#F5D98B', .1: '#DE9A96'
    };
    // const inverse_gradient = {
    //   1.0: '#E0EBF6', 0.8: '#E0EBF6', 0.6: '#BDDBEA',
    //   0.4: '#99C7E2', 0.2: '#7EB3D6', .1: '#5587B8'
    // };
    // Removed the below as props into HeatmapLayer
    // fitBoundsOnLoad
    // fitBoundsOnUpdate
    const icon = L.icon({
       className: 'my-div-icon',
       iconSize: [30, 60],
       iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-icon-2x.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-shadow.png',
    });
    const marker = this.state.clicked ? (
     <Marker position={this.state.clickLatLng} icon={icon} onClick={this.handleMarkerClick}>
       <Popup>
         <span>You are here</span>
       </Popup>
     </Marker>
   ) : null

    if (!(this.props.allRestaurants instanceof Array) || !(this.props.allCrimes instanceof Array)) {
      return(<div></div>)
    } else {
      this.getWeights();
      const transit = this.props.allTransit.map(el => ([el.lat, el.lon, this.state.transitFavorabilityScore]))
      const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, this.state.restaurantFavorabilityScore]))
      const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, this.state.crimeFavorabilityScore]))
      let positive_factors = restaurants.concat(transit)
      let negative_factors = crimes
      return (
        <div>
          <Map
            style={{height: "100vh"}}
            center={position}
            zoom={3}
            bounds={bounds}
            onClick={this.handleMapClick}>
            <HeatmapLayer
              points={positive_factors}
              radius={20}
              max={this.state.maxIntensity}
              gradient={inverse_gradient}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
              blur={30}/>
            <HeatmapLayer
              points={negative_factors}
              radius={20}
              gradient={gradient}
              max={this.state.maxIntensity}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
              blur={30}/>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://api.mapbox.com/styles/v1/hellosweta/cj12k3v5n004l2rt89a28igfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'/>
            {marker}
        </Map>
        </div>
      );
    }
  }
}

export default LeafletMap;
