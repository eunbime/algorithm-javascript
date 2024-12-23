function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }

  return answer;
}

// reduce를 사용한 방법
function solution2(absolutes, signs) {
  let answer = 0;

  absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
