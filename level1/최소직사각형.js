function solution(sizes) {
  let w = [];
  let h = [];

  sizes
    .map((item) => item.sort((a, b) => b - a))
    .forEach((i) => {
      w.push(i[0]);
      h.push(i[1]);
    });

  return Math.max(...w) * Math.max(...h);
}
