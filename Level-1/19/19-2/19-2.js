function solution(d, budget) {
  d.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) break;
    count++;
  }

  return count;
}

// (2) reduce 사용한 방법
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
