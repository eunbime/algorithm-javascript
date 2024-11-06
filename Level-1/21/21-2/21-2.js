function solution(s, skip, index) {
  let answer = "";
  const skipSet = new Set(skip);
  const aCharCode = "a".charCodeAt(0);
  const zCharCode = "z".charCodeAt(0);

  for (let char of s) {
    let count = 0;
    let currentCharCode = char.charCodeAt(0);

    while (count < index) {
      currentCharCode++;
      if (currentCharCode > zCharCode) {
        currentCharCode = aCharCode;
      }

      const nextChar = String.fromCharCode(currentCharCode);
      if (!skipSet.has(nextChar)) {
        // skip문자에 포함되지 않으면 카운트 증가
        count++;
      }
    }

    answer += String.fromCharCode(currentCharCode); // 변환된 문자 추가
  }

  return answer;
}

// (2) 다른 풀이
function solution(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((c) => !skip.includes(c));
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join("");
}
