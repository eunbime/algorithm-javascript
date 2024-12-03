function solution(rectangle, characterX, characterY, itemX, itemY) {
  const SIZE = 102; // 좌표 확대를 위해 최대 크기를 설정
  const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  // 1. 직사각형 좌표 확장 및 테두리 표시
  rectangle.forEach(([x1, y1, x2, y2]) => {
    x1 *= 2;
    y1 *= 2;
    x2 *= 2;
    y2 *= 2;
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        if (x === x1 || x === x2 || y === y1 || y === y2) {
          if (board[x][y] !== 2) board[x][y] = 1; // 테두리
        } else {
          board[x][y] = 2; // 내부
        }
      }
    }
  });

  // 2. BFS를 이용하여 최단 경로 탐색
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // 상, 우, 하, 좌
  ];
  const queue = [[characterX * 2, characterY * 2, 0]];
  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
  visited[characterX * 2][characterY * 2] = true;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    // 아이템 위치에 도달하면 거리 반환
    if (x === itemX * 2 && y === itemY * 2) {
      return distance / 2; // 좌표를 2배 확장했으므로 원래 거리로 환산
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < SIZE &&
        ny >= 0 &&
        ny < SIZE &&
        !visited[nx][ny] &&
        board[nx][ny] === 1 // 테두리만 이동 가능
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  return 0;
}
