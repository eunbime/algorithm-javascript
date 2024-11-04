function solution(babbling) {
  let count = 0;
  let sArr = ["aya", "ye", "woo", "ma"];

  babbling.map((word) => {
    let isValid = true;
    let previous = ""; // 이전 발음

    while (word.length > 0) {
      let found = false;

      for (const s of sArr) {
        if (word.startsWith(s)) {
          // 연속 발음 체크
          if (previous === s) {
            isValid = false;
            break;
          }

          word = word.slice(s.length); // 단어에서 발음 제거
          previous = s; // 이전 발음 업데이트
          found = true;
          break;
        }
      }
      if (!isValid) break;

      // 만약 어떤 발음도 단어의 맨 앞에 없으면 반복 종료
      if (!found) {
        isValid = false;
        break;
      }
    }
    // 모든 발음이 유효하고, 남은 부분이 공백일 때 카운트 증가
    if (isValid && word === "") count++;
  });

  return count;
}

// (2) 정규식 풀이
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

// (3) reduce() 풀이
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
