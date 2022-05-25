// const data = [2, 5, 6, 9, 13, 15, 28]
// const data = [40]
const data = [2, 3, 4, 10, 40];
// const data = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California',
// 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia',
// 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
// 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
// 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
// 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania',
// 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands',
// 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

/**
 * 
 Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
 The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
 The basic steps to perform Binary Search are:

  - Begin with an interval covering the whole array. 
  - If the value of the search key is less than the item in the middle of the interval, 
    narrow the interval to the lower half (left segment of the array). Otherwise, narrow it to the upper half (right segment of the array). 
  - Repeatedly check until the value is found or the interval is empty.

  Worst and Average Case: O(log n)
  Best Case: O(1)
 */

const binarySearch = (sortedAarry = [], searchNum, start = 0, end = 0) => {
  const mid = Math.floor((start + end) / 2);

  if (searchNum === sortedAarry[mid]) return mid;
  if (start < 0 && end < 0) return -1;
  if (start === end || mid < 0) return -1;

  if (searchNum > sortedAarry[mid]) {
    start = mid + 1;
  }
 else {
    end = mid - 1;
  }
  return binarySearch(sortedAarry, searchNum, start, end);
};

module.exports = {
  // binarySearch: (searchNum=40) => binarySearch(data, searchNum, 0, data.length-1)
  // binarySearch: (searchNum=0) => binarySearch(data, searchNum, 0, data.length-1)
  // binarySearch: (searchNum=9) => binarySearch(data, searchNum, 0, data.length-1)
  binarySearch: (searchNum = -1) =>
    binarySearch(data, searchNum, 0, data.length - 1)
  // binarySearch: (searchNum='Alaska') => binarySearch(data, searchNum, 0, data.length-1)
};
