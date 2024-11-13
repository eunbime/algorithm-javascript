function solution(id_list, report, k) {
  const reportCounts = {};
  const userReports = {};

  id_list.forEach((id) => {
    reportCounts[id] = 0;
    userReports[id] = new Set(); // 중복 방지 Set 사용
  });

  // report 배열을 순회하며 각 유저의 신고 상황을 저장
  report.forEach((r) => {
    const [user, target] = r.split(" ");
    // 각 유저가 신고한 ID를 저장
    userReports[user].add(target);
  });

  // 각 유저가 신고한 목록을 바탕으로 신고당한 횟수를 집계
  for (const user in userReports) {
    userReports[user].forEach((target) => {
      reportCounts[target] += 1;
    });
  }

  // 정지된 유저 목록 추출 (k번 이상 신고된 유저들)
  const suspendedUsers = new Set();
  for (const user in reportCounts) {
    if (reportCounts[user] >= k) {
      suspendedUsers.add(user);
    }
  }

  // 결과 메일을 받은 횟수를 저장할 배열
  const result = id_list.map((user) => {
    // user가 신고한 대상 중 정지된 유저 수를 count
    let mailCount = 0;
    userReports[user].forEach((target) => {
      if (suspendedUsers.has(target)) {
        mailCount += 1;
      }
    });
    return mailCount;
  });

  return result;
}
