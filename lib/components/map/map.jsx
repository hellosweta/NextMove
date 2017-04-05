import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../../../assets/vendors/HeatmapLayer';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { bartStops } from '../../../assets/data/bart_stops';
import { sfmtaStops } from '../../../assets/data/sfmta_stops';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 37.7749,
      lng: -122.47791,
      zoom: 13,
    };
  }
  componentDidMount(){
    this.props.requestAllRestaurants();
    this.props.requestAllCrimes();
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const bart = bartStops.map(el => ([el.stop_lat, el.stop_lon, 60]))
    const sfmta = sfmtaStops.map(el => ([el.stop_lat, el.stop_lon, 10]))
    let data = bart.concat(sfmta);
    if (this.props.allRestaurants.length > 0) {
      const restaurants = this.props.allRestaurants.map(el => ([el.lat, el.lon, 10]))
      data = data.concat(restaurants)
    }

    if (this.props.allCrimes.length > 0) {
     const crimes = this.props.allCrimes.map(el => ([el.lat, el.lon, 10]))
     data = data.concat(crimes)
   }

  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);
    const gradient = {
      0.4: '#471967', 0.65: '#258E8C', 1: '#E2E32D'
    };
    // Removed the below as props into HeatmapLayer
    // fitBoundsOnLoad
    // fitBoundsOnUpdate
    return (
      <div>
        <Map style={{height: "100vh"}} center={position} zoom={this.state.zoom} bounds={bounds}>
          <HeatmapLayer
            points={data}
            max={3}
            radius={5}
            gradient={gradient}
            longitudeExtractor={m =>
              m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => parseFloat(m[2])} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/hellosweta/cj12k3v5n004l2rt89a28igfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'
            />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
