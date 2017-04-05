import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/chart';
import { hashHistory } from 'react-router';
import merge from 'lodash.merge'

class LocationDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: {
              children: [
                  { name: "crime", value: 10 },
                  { name: "transit", value: 10 },
                  { name: "restaurant", value: 10 }
              ]
          }
        };
    this.goToCategroy = this.goToCategroy.bind(this);
  }

  componentDidMount(){
    let lat = this.props.lat;
    let long = this.props.long;
    let radius = this.props.radius;
    this.props.requestFilteredCrimes(lat,long,radius);
  }

  componentWillReceiveProps(newProps){
    let crime = this.state.data.children[0].value
    let transit = this.state.data.children[1].value
    let restaurant = this.state.data.children[2].value

    if(newProps.filteredCrimes){
      crime = newProps.filteredCrimes.length;
    }
    this.setState( {data: {
        children: [
            { name: "crime", value: crime },
            { name: "transit", value: transit },
            { name: "restaurant", value: restaurant }
          ]
        }
      });

  }

  goToCategroy(){
    let that = this;
    return (category) =>{
      if (that.props.location.pathname !== `/search/${category}`)
      hashHistory.push(`/search/${category}`);
    };
  }

  render(){
    return (
            <div>
                <h2>Current Chart</h2>
                <Chart
                    goToCategroy = {this.goToCategroy()}
                    type={"bubble"}
                    diameter={500}
                    showTooltips={true}
                    data={this.state.data}
                />
              { this.props.children }
            </div>
  );
  }
}

export default LocationDetail;
