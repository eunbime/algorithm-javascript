function solution(sizes) {
  let w = [];
  let h = [];

  // 명함 사이즈를 가로, 세로 순으로 정렬
  sizes
    .map((size) => size.sort((a, b) => b - a))
    .forEach((size) => {
      w.push(size[0]);
      h.push(size[1]);
    });

  // 모든 명함을 수납할 수 있는 가장 작은 지갑의 크기
  return Math.max(...w) * Math.max(...h);
}
