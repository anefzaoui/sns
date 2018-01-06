import React from 'react';
import ChartDataParser from '../util/ChartDataParser';

export default class Statistics extends React.Component {
  componentDidMount() {
    let chartDataParser = new ChartDataParser();
    chartDataParser.bandwidthPlatformChart();

  }
  render() {
    console.log("stats");
    return (
      <div>
        <div className='chart-container platformchart-1'></div>
      </div>
    );
  }
}
