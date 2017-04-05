import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/chart';

class CrimeDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: [
              { xValue: "Assult", yValue: 200 },
              { xValue: "Robbery", yValue: 15 },
              { xValue: "talking", yValue: 400},
              { xValue: "sleep", yValue: 100 },
              { xValue: "love", yValue: 250 },
          ]
      };
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
            data: [
                { xValue: "Assult", yValue: 220 },
                { xValue: "Robbery", yValue: 100 },
                { xValue: "talking", yValue: 10},
                { xValue: "sleep", yValue: 11 },
                { xValue: "love", yValue: 20 },
            ]
          })
      }, 3000);
  }

  render(){
    return (
      <div>
          <h2>Crime Chart</h2>
          <Chart
              type={"bar"}
              width={500}
              height={500}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              showTooltips={true}
              data={this.state.data}
          />
      </div>
  );
  }
}

export default CrimeDetail;
