function fibRe(num, sequence = [0, 1]) {
  if (num < 2) {
    return sequence.slice(0, num);
  }

  return sequence;
}

console.log(fibRe(1));
