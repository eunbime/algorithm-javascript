function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let move of moves) {
    let col = move - 1;

    for (let row = 0; row < board.length; row++) {
      // 인형이 있는 경우
      if (board[row][col] !== 0) {
        let doll = board[row][col];
        board[row][col] = 0; // 뽑힌 인형 자리는 0으로 만듦

        // 바구니의 맨 위 인형과 같은 모양이면 터트림
        if (basket[basket.length - 1] === doll) {
          basket.pop();
          count += 2;
        } else {
          basket.push(doll); // 아니라면 바구니에 인형 추가
        }
        break; // 인형을 뽑았다면 다음 move로 이동
      }
    }
  }

  return count;
}
