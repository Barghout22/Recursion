function fibs(num) {
  let sequence = [0, 1];
  if (num < 2) {
    return sequence.slice(0, num);
  }

  for (let i = 2; i <= num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(fibs(15));
