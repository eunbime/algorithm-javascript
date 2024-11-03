function solution(arr1, arr2) {
  let answer = [];

  answer = arr1.map((_, i) => {
    return arr1[i].map((n, j) => {
      return n + arr2[i][j];
    });
  });

  return answer;
}
