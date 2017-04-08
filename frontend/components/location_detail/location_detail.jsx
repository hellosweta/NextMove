import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';
import { hashHistory } from 'react-router';
import merge from 'lodash.merge'

class LocationDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      receivedCrime: false,
      receivedTransit: false,
      receivedRestaurant: false,
      data: {
        children: [
          { name: "crime", value: 10 },
          { name: "transit", value: 10 },
          { name: "restaurant", value: 10 }
        ]
      }
    };
    this.goToCategory = this.goToCategory.bind(this);
  }

  componentWillReceiveProps(newProps){
    let crime = this.state.data.children[0].value
    let transit = this.state.data.children[1].value
    let restaurant = this.state.data.children[2].value
    let type;

    if (this.props.filteredCrimes.length !== newProps.filteredCrimes.length){
      crime = newProps.filteredCrimes.length;
      type = 'receivedCrime';
    }
    else if (this.props.filteredTransit.length !== newProps.filteredTransit.length){
      transit = newProps.filteredTransit.length;
      type = 'receivedTransit';
    }
    else if (this.props.filteredRestaurants.length !== newProps.filteredRestaurants.length){
      restaurant = newProps.filteredRestaurants.length;
      type = 'receivedRestaurant';
    }

    // debugger;
    if (type) {
      this.setState({
        [type]: true,
        data: {
          children: [
            { name: "crime", value: crime },
            { name: "transit", value: transit },
            { name: "restaurant", value: restaurant }
          ]
        }
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //
  // }

  goToCategory(){
    let that = this;
    return (category) => {
      if (that.props.location.pathname !== `/search/${category}`)
      hashHistory.push(`/search/${category}`);
    };
  }

  render(){
    if (!(this.state.receivedCrime && this.state.receivedTransit && this.state.receivedRestaurant)) {
      return <div>I AM LOADING</div>;
    } else {
      return (
        <div className="all-charts-container">
          <div className="chart-container bubble-chart">
            <h2 className='chart-header'>Current Chart</h2>
            <Chart
                goToCategory = {this.goToCategory()}
                type={"bubble"}
                diameter={500}
                showTooltips={true}
                data={this.state.data}
            />
          </div>
          { this.props.children }
        </div>
      );
    }
  }
}

export default LocationDetail;
