function solution(nums) {
  // N/2마리의 폰켓몬 수
  const halfLength = nums.length / 2;
  // 중복 제거한 선택할 수 있는 폰켄몬 수
  const selectedLength = [...new Set(nums)].length;
  // 최대한 많이 선택할 수 있는 폰켓몬 수
  return selectedLength > halfLength ? halfLength : selectedLength;
}
