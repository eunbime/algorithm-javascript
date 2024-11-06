function solution(keymap, targets) {
  const minPresses = Array(26).fill(Infinity); // 알파벳 문자 26개에 대한 배열의 기본값을 Infinity로 초기화

  keymap.forEach((keys, kIndex) => {
    for (let i = 0; i < keys.length; i++) {
      const charIndex = keys[i].charCodeAt(0) - 65; // A의 아스키 코드 : 65
      minPresses[charIndex] = Math.min(minPresses[charIndex], i + 1);
    }
  });

  return targets.map((target) => {
    let totalPresses = 0;

    for (const char of target) {
      const charIndex = char.charCodeAt(0) - 65;

      if (minPresses[charIndex] === Infinity) {
        return -1;
      }

      totalPresses += minPresses[charIndex];
    }

    return totalPresses;
  });
}

// (2) 다른 풀이
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
