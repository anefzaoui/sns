import JSONParser from './JSONParser.js';
import Misc from './misc.js';

export default class ChartDataParser {
  constructor() {
    /**
     * Initializing a new instance of JsonParser class
     * to use its functions.
     */
    this.jsonParser = new JSONParser();
  }

  /**
   * Uses ChartisticJS API to parse data recovered from JSON file 'platform.js'
   * to render sent and recieved bandwidth of both CDN and P2P into a bar chat.
   */
  bandwidthPlatformChart() {
    this.jsonParser.loadJSONFile(this.jsonParser.BASE_URL + 'platform.json', constructChart);

    /**
     * Function that renders the chart using data passed from previously
     * loaded JSON data.
     * @param  {Object} data Data pulled from 'platform.json'
     */
    function constructChart(data) {
      // Initializing Misc class and assigning the conversion function.
      let convertBytes = new Misc().convertBytes();

      /**
       * Set of arrays to be passed into Chartistic chart creation function.
       */
      let platformNameList = [];
      let platformCDN = [];
      let platformP2P = [];
      let platformTotal = [];
      let platformUpload = [];
      let platformChartStats = []

      for (let i = 0; i < data.length; i++) {
        platformNameList.push(data[i].platform);
        platformCDN.push(data[i].cdn);
        platformP2P.push(data[i].p2p);
        platformTotal.push(data[i].total);
        platformUpload.push(data[i].upload);
      }

      platformChartStats.push(platformCDN, platformP2P, platformTotal, platformUpload);

      let aData = {
        labels: platformNameList,
        series: platformChartStats
      };

      let options = {
        seriesBarDistance: 10,
        axisX: {
          offset: 60
        },
        axisY: {
          offset: 80,
          labelInterpolationFnc: function(value) {
            return value + ' KB'
          },
          scaleMinSpace: 15
        }
      };
      new Chartist.Bar('.platformchart-bandwidth', aData, options);
    }
  }

  /**
   * Uses ChartisticJS API to parse data recovered from JSON file 'platform.js'
   * to render a pie chart representing traffic percentage.
   */
  trafficPercentagePlatformChart() {
    this.jsonParser.loadJSONFile(this.jsonParser.BASE_URL + 'platform.json', constructChart);

    /**
     * Function that renders the chart using data passed from previously
     * loaded JSON data.
     * @param  {Object} data Data pulled from 'platform.json'
     */
    function constructChart(data) {

      /**
       * Set of arrays to be passed into Chartistic chart creation function.
       */
      let platformNameList = [];
      let platformTrafficPercentage = []

      for (let i = 0; i < data.length; i++) {
        platformNameList.push(data[i].platform);
        platformTrafficPercentage.push(data[i].cdn);
      }

      let sum = function(a, b) {
        return a + b
      };

      let aData = {
        labels: platformNameList,
        series: platformTrafficPercentage
      };

      let options = {
        labelInterpolationFnc: function(value) {
          return value;
        }
      };
      new Chartist.Pie('.platformchart-trafficPercentage', aData, options);
    }
  }
}
