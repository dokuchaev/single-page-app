import React from "react";
// import Highcharts from 'highcharts';
import addFunnel  from 'highcharts/modules/funnel';
const ReactDOM = require('react-dom');
const ReactHighcharts = require('highcharts');

// export class ChartTab extends React.Component {
//
//
//   render() {
//     console.log("config", this.props.config);
//     return(
// <div>
//      <ReactHighcharts config={config}></ReactHighcharts>
// </div>
// )
//
//
//   }
// }
const config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};
