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

  componentWillReceiveProps(nextProps) {
    if (
      this.state.receivedCrime &&
      this.state.receivedTransit &&
      this.state.receivedRestaurant
    ) {
      this.setState({
        receivedCrime: false,
        receivedTransit: false,
        receivedRestaurant: false
      });
    } else if (nextProps.location.pathname !== "/search") {
      this.setState({
        receivedCrime: true,
        receivedTransit: true,
        receivedRestaurant: true
      });
    }

    let crime = this.state.data.children[0].value
    let transit = this.state.data.children[1].value
    let restaurant = this.state.data.children[2].value
    let type;

    if (this.props.filteredCrimes.length !== nextProps.filteredCrimes.length){
      crime = nextProps.filteredCrimes.length;
      type = 'receivedCrime';
    }
    else if (this.props.filteredTransit.length !== nextProps.filteredTransit.length){
      transit = nextProps.filteredTransit.length;
      type = 'receivedTransit';
    }
    else if (this.props.filteredRestaurants.length !== nextProps.filteredRestaurants.length){
      restaurant = nextProps.filteredRestaurants.length;
      type = 'receivedRestaurant';
    }

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
        <div className="chart-container bubble-chart">
            <h2 className='chart-header'>Location Breakdown</h2>
            { loadingBar() }
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
