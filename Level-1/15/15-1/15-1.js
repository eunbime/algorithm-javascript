function solution(answers) {
  let answer = [];

  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  // 맞히면 각 count 증가
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == person1[i % person1.length]) count[0]++;
    if (answers[i] == person2[i % person2.length]) count[1]++;
    if (answers[i] == person3[i % person3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);

  // 가장 많이 맞힌 사람의 번호 구하기 (인덱스 + 1)
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
