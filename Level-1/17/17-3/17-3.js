function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근(Math.sqrt)이 정수(isInteger:정수판별)일 때 약수의 개수는 홀수
    // 약수의 개수가 홀수일 때 빼고, 짝수일 때 더하기
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }

  return answer;
}
