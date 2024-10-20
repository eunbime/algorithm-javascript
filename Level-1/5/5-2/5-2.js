function solution(n, lost, reserve) {
  // 여벌이 있지만 도난당한 학생의 경우 제외
  let actualReserve = reserve.filter((r) => !lost.includes(r));
  let actualLost = lost.filter((l) => !reserve.includes(l));

  // 정렬하여 작은 번호부터 순회 (충돌 방지)
  actualReserve.sort((a, b) => a - b);
  actualLost.sort((a, b) => a - b);

  // 체육복을 빌려줄 수 있는 학생 수
  actualReserve.forEach((reserveNum) => {
    const index = actualLost.findIndex(
      (lostNum) => Math.abs(reserveNum - lostNum) === 1
    );

    if (index !== -1) {
      // 빌려주면 해당 lost 학생 제거 (중복 방지)
      actualLost.splice(index, 1);
    }
  });

  return n - actualLost.length;
}
