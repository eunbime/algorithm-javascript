function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    while (count < k && number[i] > stack[stack.length - 1]) {
      stack.pop();
      count++;
    }

    if (stack.length < number.length - k) {
      stack.push(number[i]);
    }
  }

  return stack.join("");
}
