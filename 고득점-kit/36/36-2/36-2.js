function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가

  const queue = [[begin, 0]]; // 현재단어, 변환횟수
  const visited = new Set(); // 방문한 단어 기록

  // 단어가 한 글자 차이인지 확인하는 함수 정의
  function isOneLetterDiff(word1, word2) {
    let diffCount = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffCount++;
      if (diffCount > 1) return false; // 차이가 두개 이상하면 바로 종료
    }

    return diffCount === 1;
  }

  // BFS 탐색
  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    if (current === target) return steps; // target에 도달하면 변환 횟수 반환

    for (const word of words) {
      if (!visited.has(word) && isOneLetterDiff(current, word)) {
        visited.add(word); // 방문 처리
        queue.push([word, steps + 1]); // 큐에 추가
      }
    }
  }

  return 0; // 변환할 수 없는 경우
}
