function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근을 했을 때 정수 => 약수의 개수가 홀수
    // Math.sqrt() : 제곱근
    // isInteger(): 정수 판별

    if (Number.isInteger(Math.sqrt(i))) answer -= i; // 홀수일 때 빼기
    else answer += i; // 짝수일 때 더하기
  }

  return answer;
}
