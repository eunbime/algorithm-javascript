function solution(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 소수 아닌 것 제외

  // n의 제곱근까지만 소수 판별
  for (let i = 2; i * i <= n; i++) {
    // isPrime[i]이 true(소수)라면 i의 배수는 소수가 아니므로 false
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // isPrime에서 true인 값(소수)의 개수 반환
  return isPrime.filter(Boolean).length;
}
