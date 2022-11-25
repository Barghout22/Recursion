function mergeSort(arr) {
  if (arr.length < 1) return "error :invalid entry";
  if (arr.length == 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftHalfarr = mergeSort(arr.slice(0, mid));
  const rightHalfarr = mergeSort(arr.slice(mid, arr.length));

  let fillInarray = [];
  let rightCounter = 0;
  let leftCounter = 0;

  while (
    leftCounter < leftHalfarr.length &&
    rightCounter < rightHalfarr.length
  ) {
    if (leftHalfarr[leftCounter] < rightHalfarr[rightCounter])
      fillInarray.push(leftHalfarr[leftCounter++]);
    else fillInarray.push(rightHalfarr[rightCounter++]);
  }

  if (leftCounter < leftHalfarr.length) {
    while (leftCounter < leftHalfarr.length)
      fillInarray.push(leftHalfarr[leftCounter++]);
  } else if (rightCounter < rightHalfarr.length) {
    while (rightCounter < rightHalfarr.length)
      fillInarray.push(rightHalfarr[rightCounter++]);
  }

  return fillInarray;
}

arr = [5, 6, 2, 20, 12, 3, 100, 0, 4, 4];
arr2 = [1, 2, 3];
//console.log(arr2.length / 2);
//console.log(arr2.slice(0, arr2.length / 2));
//console.log(arr2.slice(arr2.length / 2, arr2.length));
//console.log(arr2);
//mergeSort(arr);

console.log(mergeSort(arr));
