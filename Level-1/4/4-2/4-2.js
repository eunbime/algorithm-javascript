function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  // 숫자가 일치할 경우
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;

  // 0일 경우
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
