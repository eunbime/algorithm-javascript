function solution(ingredient) {
  let stack = [];
  let burgerCount = 0;

  ingredient.forEach((item) => {
    stack.push(item);

    // 스택의 마지막 4개의 요소가 [1, 2, 3, 1]인지 확인
    if (stack.length >= 4) {
      let lastFour = stack.slice(-4).join("");
      if (lastFour === "1231") {
        // 햄버거 완성 시, 마지막 4개 요소를 제거하고 카운트 증가
        stack.splice(-4, 4);
        burgerCount++;
      }
    }
  });

  return burgerCount;
}
