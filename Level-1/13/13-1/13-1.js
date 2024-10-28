function solution(k, m, score) {
  let answer = 0;

  // 오름차순 정렬 후 m개 이하의 값 버림
  const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);

  // 가장 낮은 사과의 점수가 p일 경우 사과 상자 가격 p * m
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }

  return answer;
}
