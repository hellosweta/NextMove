import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';
import { hashHistory } from 'react-router';

class LocationDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: {
              children: [
                  { name: "crime", value: 100 },
                  { name: "transit", value: 10 },
                  { name: "restaurant", value: 50 }
              ]
          }
        };
    this.goToCategroy = this.goToCategroy.bind(this);
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
