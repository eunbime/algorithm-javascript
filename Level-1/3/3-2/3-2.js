function solution1(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// reduce를 사용한 풀이
function solution2(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
