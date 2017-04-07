import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';
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
    this.goToCategory = this.goToCategory.bind(this);
  }

  componentWillReceiveProps(newProps){
    let crime = this.state.data.children[0].value
    let transit = this.state.data.children[1].value
    let restaurant = this.state.data.children[2].value
    if(newProps.filteredCrimes.length){
      crime = newProps.filteredCrimes.length;
    }
    if(newProps.filteredTransit.length){
      transit = newProps.filteredTransit.length;
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

  goToCategory(){
    let that = this;
    return (category) =>{
      if (that.props.location.pathname !== `/search/${category}`)
      hashHistory.push(`/search/${category}`);
    };
  }

  render(){
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

export default LocationDetail;
