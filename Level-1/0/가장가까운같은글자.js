function solution(s) {
  let arr = [];
  const hash = {};

  [...s].forEach((v, i) => {
    hash[v] !== undefined ? arr.push(i - hash[v]) : arr.push(-1);
    hash[v] = i;
  });

  return arr;
}
