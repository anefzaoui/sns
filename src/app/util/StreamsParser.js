import JSONParser from './JSONParser';

export default class StreamsParser {
  constructor() {
    this.jsonParser = new JSONParser();
    this.streamsList = [];
  }

  constructStreamArray() {
    this.jsonParser.loadJSONFile(`${this.jsonParser.BASE_URL}streams.json`, res => {
      for (var i = 0; i < res.length; i++) {
        if (res[i].live === 'true') {
          this.streamsList.push(res[i].manifest);
        }
      }
    });
    return this.streamsList;
  }
}
