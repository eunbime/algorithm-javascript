function solution(prices) {
  const answer = Array(n).fill(0);
  const stack = [];

  const n = prices.length;

  for (let i = 0; i < n; i++) {
    // 현재 가격이 스택의 마지막 가격보다 떨어졌을 경우
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const top = stack.pop(); // 스택에서 인덱스를 꺼낸다
      answer[top] = i - top; // 현재 인덱스와의 차이를 결과로 저장
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }

  // 스택에 남아있는 인덱스 처리 (끝까지 가격이 떨어지지 않은 경우)
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = n - top - 1;
  }

  return answer;
}
