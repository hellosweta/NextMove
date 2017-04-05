import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/chart';

class RestaurantDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: [
              { xValue: 'Indian', yValue: 5 },
              { xValue: "Ethiopian", yValue: 1 },
              { xValue: "Italian", yValue: 12 },
              { xValue: "Mexican", yValue: 20 },
              { xValue: "FastFood", yValue: 25 },
          ]
      };
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
            data: [
              { xValue: 'Indian', yValue: 15 },
              { xValue: "Ethiopian", yValue: 14 },
              { xValue: "Italian", yValue: 22 },
              { xValue: "Mexican", yValue: 25 },
              { xValue: "FastFood", yValue: 2 },
            ]
          })
      }, 3000);
  }

  render(){
    return (
    <div>
      <div>
          <h2>Restaurant Chart</h2>
          <Chart
              type={"bar"}
              width={500}
              height={500}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              showTooltips={true}
              data={this.state.data}
          />
      </div>
    </div>
  );
  }
}

export default RestaurantDetail;
