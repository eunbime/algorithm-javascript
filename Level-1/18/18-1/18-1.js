function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let exchange = Math.floor(n / a) * b; // 교환받을 콜라 개수
    answer += exchange;
    n = (n % a) + exchange; // 남은 병 + 교환 받은 병
  }

  return answer;
}

function solution2(a, b, n) {
  // n이 적어도 b 이상이어야 교환 가능: Math.max(n - b, 0)
  // 총 교환 가능 횟수 계산 : (n - b) / (a - b)
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}
