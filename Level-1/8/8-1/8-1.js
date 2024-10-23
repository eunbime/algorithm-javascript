function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;

  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + (m - 1);
    }
  }

  // 롤러로 페인트칠해야 하는 최소 횟수
  return answer;
}
