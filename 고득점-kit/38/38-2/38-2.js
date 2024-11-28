function solution(triangle) {
  const height = triangle.length;

  // 아래에서 위로 DP 계산
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 아래줄에서 최댓값을 선택
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // 최종적으로 꼭대기 요소에 최대합이 저장됨
  return triangle[0][0];
}

// 다른 풀이
function solution(triangle) {
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return (
          v +
          Math.max(
            index < cost.length ? cost[index] : 0,
            index > 0 ? cost[index - 1] : 0
          )
        );
      });
    }, [])
  );
}
