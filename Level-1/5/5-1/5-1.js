function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) answer.push(numbers[i] + numbers[j]);
    }
  }

  // [...new Set(n)] 사용하여 중복 제거
  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
}
