function fibRe(num) {
  if (num == 0) return [0];
  else if (num == 1) return [0, 1];
  const arr = fibRe(num - 1);
  return [...arr, arr[num - 1] + arr[num - 2]];
}

console.log(fibRe(5));

function fibReSingularValue(num) {
  if (num == 1) {
    return 0;
  } else if (num == 2) {
    return 1;
  }
  return fibReSingularValue(num - 1) + fibReSingularValue(num - 2);
}

//console.log(fibReSingularValue(5));
