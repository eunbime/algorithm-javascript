function solution(arr) {
  // splice() : 기존 요소 삭제 및 교체
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length <= 1 ? [-1] : arr;
}

function solution2(arr) {
  const min = Math.min(...arr);

  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
