function solution(number, limit, power) {
  let answer = 0;

  // 1번부터 number까지의 기사단원
  for (let i = 1; i <= number; i++) {
    let count = 0;
    // 약수 구하기
    for (let j = 1; j * j <= i; j++) {
      if (j * j == i) count++;
      else if (i % j == 0) count += 2;
    }

    // 공격력 제한수치보다 큰 경우 limit 공격력 가진 무기 구매
    if (count > limit) count = power;
    answer += count;
  }

  return answer;
}
