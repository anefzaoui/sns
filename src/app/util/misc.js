/**
 * Miscellaneous functions that don't fit in other categories.
 */

export default class Misc {
  constructor() {

  }

  /**
   * Generic function where we pass a number of Bytes and get the
   * most suitable conversion whether KB, MB, GB or TB.
   * @param  {Number} bytes Given bytes.
   * @return {Number}       Conversion result.
   */
  convertBytes(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2);
};
}
