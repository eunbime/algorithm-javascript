function solution(park, routes) {
  // 초기화
  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  // 시작 위치 저장
  let currentPos;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        currentPos = [i, j];
        break;
      }
    }
    if (currentPos) break;
  }

  // 명령에 따라 이동하기
  for (const route of routes) {
    const [dir, stepStr] = route.split(" ");
    const steps = parseInt(stepStr); // 거리
    const [dx, dy] = directions[dir]; // 방향

    let [x, y] = currentPos;
    let canMove = true;

    // 이동 가능한지 확인
    for (let i = 1; i <= steps; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;

      // 이동 범위 벗어나거나 장애물 만나는 경우 무시
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= park.length ||
        ny >= park[0].length ||
        park[nx][ny] === "X"
      ) {
        canMove = false;
        break;
      }
    }

    // 이동 가능하면 위치 업데이트
    if (canMove) {
      currentPos = [x + dx * steps, y + dy * steps];
    }
  }

  return currentPos;
}
