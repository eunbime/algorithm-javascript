function solution(strings, n) {
  // charCodeAt: 문자열을 UTF-16 코드 단위 정수로 반환하는 메서드
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

function solution2(strings, n) {
  // localeCompare : 문자열이 주어진 문자열보다 앞에 오는지, 뒤에 오는지, 정렬 순서상 동일한지 나타내는 숫자를 반환하는 메서드
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localCompare(b) : a[n].localCompare(b[n])
  );
}
