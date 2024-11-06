function solution(N, stages) {
  let answer = [];

  let totalPlayers = stages.length; // 총 사용자 수

  for (let stage = 1; stage <= N; stage++) {
    const playerAtStage = stages.filter(
      (playerStage) => playerStage === stage
    ).length;

    // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    const failureRate = playerAtStage / totalPlayers;
    answer.push({ stage, failureRate });

    // 남은 사용자 수 업데이트
    totalPlayers -= playerAtStage;
  }

  answer.sort((a, b) => {
    if (b.failureRate === a.failureRate) {
      return a.stage - b.stage;
    }
    return b.failureRate - a.failureRate;
  });

  return answer.map((item) => item.stage);
}

// (2) 다른 풀이
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
