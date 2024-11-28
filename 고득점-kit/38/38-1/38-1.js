function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set()); // dp[1] ~ dp[8]

  dp[1].add(N); // N을 한 번 사용한 경우 초기값

  for (let i = 2; i <= 8; i++) {
    // i번 사용하여 만들 수 있는 수 생성
    dp[i].add(Number(N.toString().repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b); // 덧셈
          dp[i].add(a - b); // 뺄셈
          dp[i].add(a * b); // 곱셈
          if (b !== 0) dp[i].add(Math.floor(a / b)); // 나눗셈
        }
      }
    }

    // 목표 숫자 확인
    if (dp[i].has(number)) return i;
  }

  return -1; // 8번 안에 목표 숫자를 만들 수 없는 경우
}
