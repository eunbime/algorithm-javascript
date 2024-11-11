function solution(wallpaper) {
  // 시작점과 끝점 초기화
  let lux = Infinity,
    luy = Infinity;
  let rdx = -Infinity,
    rdy = -Infinity;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        // 가장 위쪽과 왼쪽의 파일 위치
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);

        // 가장 아래쪽과 오른쪽의 파일 위치
        rdx = Math.max(rdx, i + 1);
        rdy = Math.max(rdy, j + 1);
      }
    }
  }

  return [lux, luy, rdx, rdy];
}
