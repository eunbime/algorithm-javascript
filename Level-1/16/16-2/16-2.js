function solution(n, m) {
  let answer = [];

  let minN = Math.min(n, m);
  let maxN = Math.max(n, m);

  // 최대공약수
  answer[0] = gcd(minN, maxN);
  // 최소공배수
  answer[1] = (minN * maxN) / answer[0];

  return answer;
}

// 최대공약수 알고리즘 : gcd
function gcd(minN, maxN) {
  return minN % maxN === 0 ? maxN : gcd(maxN, minN % maxN);
}
