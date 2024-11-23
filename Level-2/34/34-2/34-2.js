function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과 시간
  let bridge = Array(bridge_length).fill(0); // 다리 위 상태 초기화
  let totalWeight = 0; // 현재 다리 위 트럭의 총 무게

  while (bridge.length > 0) {
    time++; // 1초 경과

    // 다리의 맨 앞 트럭이 다리를 건너면 제거
    totalWeight -= bridge.shift();

    // 대기 트럭 중 첫번째 트럭이 다리에 올라갈 수 있는지 확인
    if (truck_weights.length > 0) {
      if (totalWeight + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift(); // 대기 트럭에서 제거
        bridge.push(nextTruck); // 다리 위로 트럭 이동
        totalWeight += nextTruck; // 다리 무게 추가
      } else {
        // 다리가 가득 차면 0 추가
        bridge.push(0);
      }
    }
  }

  return time;
}
