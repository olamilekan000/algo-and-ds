/* eslint-disable brace-style */
/* eslint-disable no-useless-catch */
require('dotenv').config();
require('./src/algo/bubble-sort')

const { binarySearch } = require('./src/algo/binary-search');


(async () => {
  try {
    console.log('solution ', binarySearch());
  } catch (e) {
    throw e;
  }
})();
