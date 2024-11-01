function solution(s) {
  let answer = 0;
  let fixedChar = "";
  let cnt = [0, 0];

  for (let c of s) {
    // 첫글자가 없다면 넣어줌
    if (!fixedChar) fixedChar = c;

    if (fixedChar === c) cnt[0]++;
    else cnt[1]++;

    // 두 숫자가 같아지면 answer++하고 초기화
    if (cnt[0] === cnt[1]) {
      answer++;
      cnt = [0, 0];
      fixedChar = "";
    }
  }

  if (fixedChar) answer++;

  return answer;
}
