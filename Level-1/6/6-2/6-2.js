// 해시맵 사용 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

// 정렬 이용 풀이
function solution2(participant, completion) {
  // 순서대로 정렬
  participant.sort();
  completion.sort();

  // 두 배열을 순서대로 비교
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]; // (1) 서로 다른 지점에서 바로 return
    }
  }

  // (2) 마지막 참가자가 완주하지 못한 경우
  return participant[participant.length - 1];
}
