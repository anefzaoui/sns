/**
 * Class containing functions to make it easier to deal with JSON.
 * ES6 makes it quite easy already but ideally we'd want to put the
 * repeatable tasks into resuable modules, hence JsonParser.
 * @type {String}
 */
export default class JSONParser {
  constructor() {
    /**
     * Base URL for all the JSON files.
     * Ideally in a production environment they would be
     * In a server so we only have to proide an HTTPS URL.
     */
    this.BASE_URL = '../../public/assets/JSON/';
  }

  /**
   * Loads a single json file, and paasses data to a callback function.
   * @param  {String}   file JSON file path.
   * @param  {Function} done Callback function for JSON data recieved.
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
