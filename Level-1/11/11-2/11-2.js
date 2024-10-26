function solution(s) {
  let answer = "*".repeat(s.length - 4) + s.slice(-4);
  return answer;
}

// 정규식 사용하는 방법
function solution2(s) {
  let answer = s.slice(0, -4).replace(/[0-9]/g, "*") + s.slice(-4);
  return answer;
}
