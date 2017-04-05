import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../../../assets/vendors/HeatmapLayer';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { bartStops } from '../../../assets/data/bart_stops';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 37.7749,
      lng: -122.47791,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const data = bartStops.map(el => ([el.stop_lat, el.stop_lon, 60]));
    return (
      <div>
        <Map style={{height: "100vh"}} center={position} zoom={this.state.zoom}>
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={data}
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
