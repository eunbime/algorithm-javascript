function solution(tickets) {
  const graph = {};
  const result = [];

  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });

  for (const key in graph) {
    graph[key].sort();
  }

  function dfs(current) {
    while (graph[current] && graph[current].length > 0) {
      const next = graph[current].shift();
      dfs(next);
    }
    result.push(current);
  }

  dfs("ICN");
  return result.reverse();
}
