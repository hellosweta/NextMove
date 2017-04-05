import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/chart';



class TransitDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: [
              { xValue: 'Bart', yValue: 2 },
              { xValue: "Muni", yValue: 15 },
          ]
      };
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
            data: [
              { xValue: 'Bart', yValue: 5 },
              { xValue: "Muni", yValue: 5 },
            ]
          })
      }, 3000);
  }

  render(){
    return (
      <div>
          <h2>Transit Chart</h2>
          <Chart
              type={"bar"}
              width={250}
              height={500}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              showTooltips={true}
              data={this.state.data}
          />
      </div>
  );
  }
}

export default TransitDetail;
