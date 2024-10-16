function solution1(k, m, score) {
  var answer = 0;

  score.sort((a, b) => b - a);

  let box = Math.floor(score.length / m);

  for (let i = 1; i <= box; i++) {
    answer += score[m * i - 1] * m;
  }

  return answer;
}

function solution2(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice() // 복사
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
