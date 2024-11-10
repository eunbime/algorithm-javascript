function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "") // a-z, 0-9, -, _, . 를 제외한 모든 문자 제거(replace(""))
    .replace(/\.{2,}/g, ".") // 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
    .replace(/^\.|\.$/g, "") // 마침표가 처음이나 끝에 위치한다면 제거
    .replace(/^$/, "a") // 빈 문자열이라면 'a'를 대입
    .slice(0, 15)
    .replace(/\.$/, ""); // 길이가 16자 이상이면 처음 15개 문자만 남기고 제거, 끝에 위치한 마침표가 있다면 제거

  // 길이가 2자 이하라면 마지막 문자를 3이 될 때까지 반복해서 끝에 붙임
  return answer.length > 2
    ? answer
    : answer + answer.charAt(answer.length - 1).repeat(3 - answer.length);
}
