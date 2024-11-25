function solution(numbers) {
  // 두 숫자를 문자열로 연결했을 때의 결과값을 비교
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  // .sort((a, b) => (b + a).localeCompare(a + b)), localeCompare(): 문자열 비교 메서드

  return answer[0] === "0" ? "0" : answer;
}
