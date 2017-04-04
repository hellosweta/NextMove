import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

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
    return (
      <div>
        <Map style={{height: "100vh"}} center={position} zoom={this.state.zoom}>
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
