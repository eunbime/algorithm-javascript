function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시점을 기준으로 오름차순 정렬

  const pq = []; // 우선순위 큐(소요 시간 기준 최소 힙)
  let currentTime = 0;
  let totalTurnaroundTime = 0;
  let jobIndex = 0;
  const n = jobs.length;

  while (jobIndex < n || pq.length > 0) {
    // 현재 시각까지 요청된 작업을 우선순위 큐에 추가
    while (jobIndex < n && jobs[jobIndex][0] <= currentTime) {
      pq.push([jobs[jobIndex][1], jobs[jobIndex][0]]); // [소요 시간, 요청 시점]
      pq.sort((a, b) => a[0] - b[0]); // 소요 시간 기준 정렬
      jobIndex++;
    }

    if (pq.length > 0) {
      // 대기 큐에서 작업 꺼내기
      const [processingTime, requestTime] = pq.shift(); // 소요 시간, 요청 시점
      currentTime += processingTime; // 작업 처리에 걸리는 시간 누적
      totalTurnaroundTime += currentTime - requestTime; // 반환 시간 계산
    } else {
      // 처리할 작업이 없다면 다음 작업의 요청 시간으로 현재 시각 이동
      currentTime = jobs[jobIndex][0];
    }
  }

  // 반환 시간의 평균 계산
  return Math.floor(totalTurnaroundTime / n);
}
