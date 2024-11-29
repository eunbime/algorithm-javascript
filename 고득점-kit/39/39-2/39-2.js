function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  results.forEach(([win, lose]) => {
    graph[win][lose] = 1;
    graph[lose][win] = -1;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        }
        if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1;
        }
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    let known = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] !== 0) known++;
    }
    if (known === n - 1) count++;
  }

  return count;
}
