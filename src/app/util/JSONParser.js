export default class JSONParser {
  constructor() {
    this.BASE_URL = '../../public/assets/JSON/';
    this.files = [
      'audience.json',
      'bandwidth.json',
      'country.json',
      'isp.json',
      'platform.json',
      'streams.json',
      'usage.json'
    ];
  }

  /**
   * Loads a single json file, and provides data within a callback function.
   * @param  {String}   file JSON file.
   * @param  {Function} done Callback function for JSON data.
   */
  loadJSONFile(file, done) {
    fetch(file).then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        done(data);
      });
    }).catch(function(err) {
      console.log('Fetch Error', err);
    });
  }
}
