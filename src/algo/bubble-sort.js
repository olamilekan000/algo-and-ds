const arr = [3, 5, 4, 1, 2];

/**
 * In bubble sort. Highest numbers or items are bubbled to tthe top. This is done with a swap function
 */

const bubbleSort = (data) => {
  for (let arri = data.length; arri > 0; arri--) {
    for (let j = 0; j < arri - 1; j++) {
      // console.log(arri, j, arri - 1)
      // console.log(data[j]);
      if (data[j] > data[j + 1]) {
        data = swap(data, j, j + 1)
      }
    }
  }

  return data;
};

function swap(arr, pos1, pos2) {
  const tempPos = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = tempPos
  return arr;
}

console.log('bubble', bubbleSort(arr));
