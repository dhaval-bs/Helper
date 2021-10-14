module.exports = {

  /**
   * Generates random string fo given length.
   * If length is not passed then it will generate
   * random string of length 6 by default.
   *
   * @param length - length of generated string. defaults to 6
   * @returns {string} - random string
   */
  randomString: (length = 6) => Math.random().toString(36).substr(2, length),

  /**
   * Waits for the given time.
   *
   * @param time - in milliseconds
   */
  sleep: (time) => new Promise((resolve) => setTimeout(resolve, time))
};
