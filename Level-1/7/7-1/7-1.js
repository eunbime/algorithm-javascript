// (1) 정규식 사용한 방법
function solution(s) {
  return s.slice(0, -4).replace(/[0-9]/g, "*") + s.slice(-4);
}

// (2) repeat() 사용한 방밥
function solution2(s) {
  return "*".repeat(s.length - 4) + s.slice(-4);
}
