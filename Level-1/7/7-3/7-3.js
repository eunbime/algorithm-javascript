function solution(nums) {
  let answer = 0;

  // 소수 판별 함수
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return; // 소수가 아닐 때
    }
    return true; // 소수일 때
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}
