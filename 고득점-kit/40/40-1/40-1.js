function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  // 그래프 초기화
  wires.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const countNodes = (start, visited) => {
    const queue = [start];
    visited[start] = true;
    let count = 0;

    while (queue.length > 0) {
      const node = queue.shift();
      count++;

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return count;
  };

  let minDifference = Infinity;

  // 간선 하나씩 끊어보기
  for (const [v1, v2] of wires) {
    // 간선 끊기
    graph[v1] = graph[v1].filter((v) => v !== v2);
    graph[v2] = graph[v2].filter((v) => v !== v1);

    // 노드 개수 계산 (BFS)
    const visited = Array(n + 1).fill(false);
    const count1 = countNodes(1, visited);
    const count2 = n - count1;

    // 최소 차이 갱신
    minDifference = Math.min(minDifference, Math.abs(count1 - count2));

    // 간선 복구
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  return minDifference;
}
