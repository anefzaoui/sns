/**
 * Provides parsed and ready-to-use data to the 'Live Now' page.
 * Mainly list of live streams to iterate through and render into
 * videos.
 * @type {JSONParser}
 */

import JSONParser from './JSONParser';

export default class StreamsParser {
  constructor() {
    this.jsonParser = new JSONParser();
    this.streamsList = [];
  }

  /**
   * Gives us a list of streams to render later into watchable videos.
   * Side note: of course here we pretend that there is a server providing
   * us with the data so we take all links for granted.
   * @return {Array} List of streams marked as currently live.
   */
  constructStreamArray() {
    let self = this;
    this.jsonParser.loadJSONFile(`${this.jsonParser.BASE_URL}streams.json`, _constructStreamArray);
    function _constructStreamArray(res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].live === 'true') {
          self.streamsList.push(res[i].manifest);
        }
      }
      console.log(self.streamsList);
    }
    return this.streamsList;
  }
}
