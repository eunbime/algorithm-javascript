function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");

    if (command === "I") {
      queue.push(Number(value));
      queue.sort((a, b) => a - b);
    } else if (command === "D" && queue.length > 0) {
      if (value === "1") {
        // 최댓값 삭제
        queue.pop();
      } else if (value === "-1") {
        // 최솟값 삭제
        queue.shift();
      }
    }
  });

  // 큐가 비어있다면 [0, 0] 반환
  if (queue.length === 0) return [0, 0];

  // 최댓값과 최솟값 반환
  return [queue[queue.length - 1], queue[0]];
}
