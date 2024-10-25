function solution(k, score) {
  let answer = [];
  const arr = [];

  for (let i = 0; i < score.length; i++) {
    // k일 까지 모든 점수가 입력
    if (i < k) {
      arr.push(score[i]);
    }

    // 기존 k번째 점수보다 높다면 삭제 후 입력
    if (score[i] > Math.min(...arr)) {
      arr.pop();
      arr.push(score[i]);
      arr.sort((a, b) => b - a); // 내림차순
    }

    // at(-1)을 사용하여 가장 마지막 배열(최하위 점수)를 입력한다
    answer.push(arr.at(-1));
  }

  return answer;
}
