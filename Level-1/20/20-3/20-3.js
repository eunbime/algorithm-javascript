function solution(n, arr1, arr2) {
  return arr1.map((val, i) => {
    // padStart() :  문자열이 주어진 길이에 도달할 때까지 이 문자열의 시작 부분에 다른 문자열을 (필요하다면 여러 번) 채웁니다
    // toString(2) : 2진수 변환
    const binary = (val | arr2[i]).toString(2).padStart(n, "0");

    // 이진수 1을 #, 0을 공백으로 변환
    return binary.replace(/1/g, "#").replace(/0/g, " ");
  });
}
