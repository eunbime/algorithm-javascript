function solution(priorities, location) {
  // 큐에 인덱스와 중요도를 객체로 저장
  let queue = priorities.map((priority, index) => ({ priority, index }));
  // 실행 순서 카운트
  let count = 0;

  while (queue.length > 0) {
    // 큐에서 첫번째 프로세스 꺼냄: shift()
    let current = queue.shift();

    // 우선순위 더 높은 프로세스 확인
    if (queue.some((process) => process.priority > current.priority)) {
      // 우선순위가 더 높은 프로세스 있으면 현재 프로세스 뒤로 보냄
      queue.push(current);
    } else {
      // 실행
      count++;
      // 실행된 프로세스가 원하는 프로세스일 경우 반환
      if (current.index === location) {
        return count;
      }
    }
  }

  return count;
}
