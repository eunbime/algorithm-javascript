function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (t.slice(i, i + p.length) <= p) answer++;
  }

  // t의 부분문자열이 나타내는 수가 p보다 작거나 같은 것이 나오는 횟수
  return answer;
}
