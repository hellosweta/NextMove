import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';
import { hashHistory } from 'react-router';
import merge from 'lodash.merge';

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
    if (this.state.receivedCrime && this.state.receivedTransit && this.state.receivedRestaurant) {
      this.setState({
        receivedCrime: false,
        receivedTransit: false,
        receivedRestaurant: false,
      });
    }

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.receivedCrime && this.state.receivedTransit && this.state.receivedRestaurant) {
  //     this.setState({
  //       receivedCrime: false,
  //       receivedTransit: false,
  //       receivedRestaurant: false,
  //     });
  //   }
  // }

  goToCategory(){
    let that = this;
    return (category) => {
      if (that.props.location.pathname !== `/search/${category}`)
      hashHistory.push(`/search/${category}`);
    };
  }

  render(){
    const loadingBar = () => {
      if (!(this.state.receivedCrime && this.state.receivedTransit && this.state.receivedRestaurant)) {
        return (
          <div className="loading-bar">
            <div className="load-wrapp">
              <div className="load-3">
                <p>Calculating...</p>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        );
      }
    };

    return (
      <div className="all-charts-container">
        { loadingBar() }
        <div className="chart-container bubble-chart">
            <h2 className='chart-header'>Location Breakdown</h2>
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

export default LocationDetail;
