import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class LeafletMap extends React.Component {
  constructor(){
    super();
  }
  render(){
    const position = [37.7749, -122.4194];
    return(<Map center={position} zoom={13}>
      {"test"}
      <TileLayer
        url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={18}
        id='hellosweta.67aaf8fb'
        accessToken='pk.eyJ1IjoiaGVsbG9zd2V0YSIsImEiOiJjajEyaDhwZnQwNnF5MzNvMms3dzluemZnIn0.RzmThYRkDkV3wEMw7J2JCA'
        />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
      </Marker>
    </Map>);
  }
}
export default LeafletMap;
