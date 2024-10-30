function solution(s, n) {
  let answer = "";
  // 알파벳 대문자, 소문자 문자열
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    let alphabet = s[i];

    // 공백 처리 (공백은 암호화 대상이 아님)
    if (alphabet == " ") {
      answer += " ";
      continue;
    }

    let alphabetArr = upper.includes(alphabet) ? upper : lower;
    let index = alphabetArr.indexOf(alphabet) + n;
    if (index >= alphabetArr.length) index -= alphabetArr.length;
    answer += alphabetArr[index];
  }

  return answer;
}
