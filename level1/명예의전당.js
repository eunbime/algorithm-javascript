// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  var answer = [];
  const arr = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr.push(score[i]);
    }

    if (score[i] > Math.min(...arr)) {
      if (score[i] > Math.min(...arr)) {
        arr.pop();
        arr.push(score[i]);
        arr.sort((a, b) => b - a);
      }

      answer.push(arr.at(-1));
    }
  }
}
