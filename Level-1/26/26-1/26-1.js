function solution(players, callings) {
  const indexMap = {}; // 해시맵 생성

  // 초기 순위를 해시맵에 저장
  players.forEach((player, index) => {
    indexMap[player] = index;
  });

  callings.forEach((calling) => {
    const currentIndex = indexMap[calling];

    // 호출된 선수와 바로 앞 선수의 위치를 교환
    if (currentIndex > 0) {
      const prevPlayer = players[currentIndex - 1]; // 앞 선수

      // 호출된 선수와 현재 선수의 순위 변경
      players[currentIndex - 1] = calling;
      players[currentIndex] = prevPlayer;

      // indexMap에 각 선수 현재 순위 업데이트
      indexMap[calling]--;
      indexMap[prevPlayer]++;
    }
  });

  return players;
}
