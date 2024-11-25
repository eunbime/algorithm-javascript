function solution(n, computers) {
  const visited = Array(n).fill(false); // 방문 여부 기록
  let networkCount = 0;

  // DFS 함수 정의
  function dfs(node) {
    visited[node] = true; // 현재 노드 방문 처리

    for (let neighbor = 0; neighbor < n; neighbor++) {
      // 연결되어 있고 아직 방문하지 않았을 시 재귀 호춣
      if (computers[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  // 모든 컴퓨터 확인하며 DFS 탐색
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 노드에서 새로운 네트워크 탐색
      networkCount++;
      dfs(i);
    }
  }

  return networkCount;
}
