import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';



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

  componentDidMount(){
    if(Object.keys(this.props.filteredTransit).length){
      let data = this.getData(this.props.filteredTransit)
      this.setState({data});
    }
  }

  componentWillReceiveProps(newProps){
    if(Object.keys(newProps.filteredTransit).length){
      let data = this.getData(newProps.filteredTransit)
      this.setState({data});
    }
  }
  getData(filteredData){
    let aggrigate = {}
    filteredData.forEach((transit) =>{
      let category = transit.type
      if (aggrigate[category]){
        aggrigate[category] = aggrigate[category] + 1
      }else {
        aggrigate[category] = 1
      }
    })

    let data = [];
    Object.entries(aggrigate).forEach((category)=> {
      data.push({xValue: category[0], yValue: category[1] })
    })

    data.sort((a,b) => b.yValue - a.yValue);
    return data;
  }

  render(){
    return (
      <div className='BarChart'>
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
