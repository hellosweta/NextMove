import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { Overlay, Popover } from 'react-bootstrap';

import inside from 'point-in-polygon';
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
        lng: -0.09
      }
    };

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.renderHeatmap = this.renderHeatmap.bind(this);
    this.renderLegend = this.renderLegend.bind(this);
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
        newRanks: false
      })
    } else if (this.state.ranks && newProps.ranks != this.state.ranks) {
      this.setState({
        ranks: newProps.ranks,
        newRanks: true
      })
    }
  }

  handleMapClick(e){
    this.setState({
      clickLatLng: e.latlng,
      clicked: true
    })

  }

  handleMarkerClick(e){
    var polygon = [[-122.4281, 37.7068],[-122.5048,37.7068],[-122.5158,37.7835],[-122.4062,37.8108],[-122.3569,37.7287],[-122.3898,37.7068]];
      if(inside([ this.state.clickLatLng.lng, this.state.clickLatLng.lat ], polygon)){
        hashHistory.push('/search')
        this.props.requestFilteredCrimes(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
        this.props.requestFilteredTransitData(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
        this.props.requestFilteredRestaurants(this.state.clickLatLng.lat, this.state.clickLatLng.lng, .25);
        this.setState({
          clicked: false
        })
        let target = $('.bubble-chart');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
      }
  }
  renderLegend(){
    // return [
    //   <ul key="legend" className="legend">
    //     <li>Public Transit</li>
    //     <li><span></span></li>
    //   </ul>]
  }
  renderHeatmap(ranks){
    const green_gradient = {
      0.1: 'rgba(255, 255, 204, .2)', 0.2: 'rgba(217, 240, 163, .2)', 0.4: 'rgba(173, 221, 142, .2)',
      0.6: 'rgba(120, 198, 121, .2)', 0.8: 'rgba(49, 163, 84, .2)', 1.0: 'rgba(0, 104, 55, .2)',
    };
    const blue_gradient = {
      0.1: 'rgba(178,24,43, .2)', 0.2: 'rgba(239,138,98, .2)', 0.4: 'rgba(253,219,199, .2)',
      0.6: 'rgba(209,229,240, .2)', 0.8: 'rgba(103,169,207, .2)', 1.0: 'rgba(33,102,172, .2)',
    };
    const purple_gradient = {
      0.1: 'rgba(27,120,55, .2)', 0.2: 'rgba(127,191,123, .2)', 0.4: 'rgba(217,240,211, .2)',
      0.6: 'rgba(231,212,232,.2)', 0.8: 'rgba(175,141,195,.2)', 1.0: 'rgba(118,42,131,.2)',
    };
    const red_gradient = {
      0.4: 'blue', 0.8: 'orange', 1.0: 'red'
    }

    // const red_gradient = {
    //   0.1: 'rgb(26,152,80)', 0.08: 'rgb(145,207,96)', 0.4: 'rgb(230,245,152)',
    //   0.6: 'rgb(254, 224, 139)', 0.8: 'rgb(244, 109, 46)', 1.0: 'rgb(214, 14, 4)',
    // };
    const no_gradient = {
      0.1: 'rgba(0,0,0,0)', 1: 'rgba(0,0,0,0)'
    };

    const gradientKey = {
      "crimes": red_gradient,
      "restaurants": purple_gradient,
      "transitStops": blue_gradient
    }
    let layers;
    let gradients;
    if (ranks.length > 1) {
      gradients = this.state.ranks.map((rank, idx) =>
        gradientKey[rank]
      )
      gradients = gradients.reverse();

      return (
        ranks.reverse().map((rank, idx) => (<HeatmapLayer
        key={idx}
        points={rank}
        radius={5}
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
        radius={5}
        gradient={gradients[idx]}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        blur={30}/>)))
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
  //  const norwest = "37.807155, -122.521630";
  //  const soueast = "37.723597, -122.351775";
    const southWest = L.latLng(37.74187, -122.47791),
    northEast = L.latLng(37.80971, -122.39208),
    bounds = L.latLngBounds(southWest, northEast);

    const icon = L.icon({
       className: 'my-div-icon',
       iconSize: [30, 50],
       iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-icon-2x.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-shadow.png',
    });

    const marker = (
      <Marker
        ref="target"
        className="marker"
        position={ this.state.clickLatLng }
        icon={ icon }
        onClick={ this.handleMarkerClick } />
    );

    const popover = (
      <Overlay
        show={ true }
        rootClose={ false }
        placement="top"
        container={ this }
        target={ ReactDOM.findDOMNode(this.refs.target) }>
        <Popover id="marker-popover" title="Marker Popover">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      </Overlay>
    );

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
            { marker }
            { popover }
          </Map>
          <div className="legend-box">
            <ul key="legend" className="legend">
              <li>Public Transit<span className="public-transit">"   "</span></li>
              <li>Crime<span className="crime">"   "</span></li>
              <li>Restaurants<span className="restaurants">"   "</span></li>
            </ul>

          </div>
          <DragDropContextProvider backend={HTML5Backend}>
            <SideBarContainer />
          </DragDropContextProvider>

        </div>
      );
    }
  }
}

export default LeafletMap;
