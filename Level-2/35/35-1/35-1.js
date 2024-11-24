function solution(brown, yellow) {
  const total = brown + yellow; // 전체 격자 수

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      // 가로와 세로가 나누어떨어지는 경우
      const width = total / height;

      // 테두리를 제외한 중앙이 yellow와 일치하는지 확인
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return [];
}
