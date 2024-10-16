function solution(strings, n) {
  strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
  return strings;
}
