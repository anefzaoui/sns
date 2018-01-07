import React from 'react';
import ChartDataParser from '../util/ChartDataParser';
import Chart from '../components/Chart';

export default class Statistics extends React.Component {
  componentDidMount() {
    let chartDataParser = new ChartDataParser();
    chartDataParser.bandwidthPlatformChart();
    chartDataParser.trafficPercentagePlatformChart();

  }
  render() {
    console.log("stats");
    return (
      <div>
        <Chart title="Platform Bandwidth" chartClass="platformchart-bandwidth"/>
        <Chart title="Platform Traffic Percentage" chartClass="platformchart-trafficPercentage"/>
      </div>
    );
  }
}
