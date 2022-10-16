function mergeSort(startArray) {
  const length = startArray.length;
  if (length == 1) {
    console.log(startArray);
    return startArray;
  }
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);
  merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
}
const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

module.exports = {
  mergeSort,
};

//***************---------pseudo mergeSort------------*******//
// function mergeSort(arr)
//   if the length of arr equals 1
//     return arr

//   midIndex = the floor integer of (left + right) / 2
//   leftArray = arr from 0 to midIndex
//   rightArray = arr from midIndex to end

//   return merge(mergeSort(leftArray), mergeSort(rightArray))

//***************---------pseudo merge------------*******//
// function merge(leftArr, rightArr)
//   sortedArray = []
//   while leftArray and rightArray have a length greater than 0
//     if leftArray[0] is less than rightArray[0]
//       push leftArray[0] onto sortedArray
//       remove leftArray[0] from leftArray
//     else
//       push rightArray[0] onto sortedArray
//       remove rightArray[0] from rightArray

//   return sortedArray with leftArray and rightArray concatenated
