import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../../../assets/vendors/HeatmapLayer';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
// import SideBarContainer from '../sidebar/sidebar_container';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 37.7749,
      lng: -122.47791,
      zoom: 13
    };
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
    this.props.requestAllCrimes();
  }

  intensity(){

  }
  render() {
    const position = [this.state.lat, this.state.lng];
  //   const bart = bartStops.map(el => ([el.stop_lat, el.stop_lon, 60]))
  //   const sfmta = sfmtaStops.map(el => ([el.stop_lat, el.stop_lon, 60]))
  //   let positive_factors = bart.concat(sfmta);
  //   let negative_factors;
  //   if (this.props.allRestaurants.length > 0) {
  //     const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, 60]))
  //     positive_factors = positive_factors.concat(restaurants)
  //   }
   //
  //   if (this.props.allCrimes.length > 0) {
  //    const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, 10]))
  //    negative_factors = (crimes)
  //  }

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
     0.6: '#FAF3A5', 0.8: '#F5D98B', 1.0: '#DE9A96'
   };
    const inverse_gradient = {
     1.0: '#89BDE0', 0.8: '#96E3E6', 0.6: '#82CEB6',
     0.4: '#FAF3A5', 0.2: '#F5D98B', .1: '#DE9A96'
   };
    // Removed the below as props into HeatmapLayer
    // fitBoundsOnLoad
    // fitBoundsOnUpdate
    if (!(this.props.allRestaurants instanceof Array) || !(this.props.allCrimes instanceof Array)) {
      return(<div></div>)
    } else {
      // const transit = this.props.allTransit.map(el => ([el.lat, el.lon, transitIntensity]))
      // const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, restaurantIntensity]))
      // const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, crimeIntensity]))
      // let positive_factors = restaurants
      // let negative_factors = crimes
      const data = [[37.803664, -122.271604, 4], [37.80787, -122.269029, 3]];
      return (
        <div>
          <Map style={{height: "100vh"}} center={position} zoom={this.state.zoom} bounds={bounds}>

            <HeatmapLayer
              points={data}
              radius={20}
              gradient={inverse_gradient}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[2])}
              blur={30} />

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://api.mapbox.com/styles/v1/hellosweta/cj12k3v5n004l2rt89a28igfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'/>
          </Map>
        </div>
      );
    }
  }
}

export default LeafletMap;
