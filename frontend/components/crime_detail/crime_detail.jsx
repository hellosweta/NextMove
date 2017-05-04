import React from 'react';
import * as d3 from "d3";
import Chart from '../../../assets/vendors/d3act/Chart';

class CrimeDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          data: [
              { xValue: "Assult", yValue: 200 },
              { xValue: "Robbery", yValue: 15 },
              { xValue: "talking", yValue: 400},
          ]
      };
  }


  componentDidMount(){
    if(Object.keys(this.props.filteredCrimes).length){
      let data = this.getData(this.props.filteredCrimes);
      this.setState({data});
    }
  }


  componentWillReceiveProps(newProps){
    if(Object.keys(newProps.filteredCrimes).length){
      let data = this.getData(newProps.filteredCrimes);
      this.setState({data});
    }
  }

  getData(filteredData){
    let aggrigate = {};
    filteredData.forEach((crime) =>{
      let category = this.formatCategoryname(crime.category);
      if (aggrigate[category]){
        aggrigate[category] = aggrigate[category] + 1;
      }else {
        aggrigate[category] = 1;
      }
    });

    let data = [];
    Object.entries(aggrigate).forEach((category)=> {
      data.push({xValue: category[0], yValue: category[1] });
    });

    data.sort((a,b) => b.yValue - a.yValue);
    return data;
  }

formatCategoryname(categoryName){
  let string = categoryName.toLowerCase();

  switch (string) {
    case 'driving under the influence':
      string = 'dui';
      break;
    case 'sex offenses, forcible':
      string = 'sexual assualt';
      break;
    default:
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  render(){
    return (
      <div className='chart-container bar-chart'>
          <h2 className='chart-header'>CRIME IN 2017</h2>
          <Chart
              type={"bar"}
              width={550}
              height={400}
              margin={{ top: 40, right: 40, bottom: 70, left: 70 }}
              showTooltips={true}
              ylabel={'# of Crimes'}
              data={this.state.data}
          />
      </div>
  );
  }
}

export default CrimeDetail;
