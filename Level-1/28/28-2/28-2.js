function solution(video_len, pos, op_start, op_end, commands) {
  // 시간 -> 분 단위 변환
  let mPos = toMinutes(pos);
  const mOpStart = toMinutes(op_start);
  const mOpEnd = toMinutes(op_end);
  const mVideo = toMinutes(video_len);

  if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;

  commands.forEach((p) => {
    // next, prev 명령어에 따라 10초씩 이동
    mPos += p === "next" ? 10 : -10;

    if (mPos < 0) mPos = 0;

    if (mPos > mVideo) mPos = mVideo;

    if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;
  });

  // 분 -> 시간 변환
  const h = Math.floor(mPos / 60) + "";
  const m = (mPos % 60) + "";

  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
}

// 시간 -> 분 변환 함수
function toMinutes(time) {
  const [h, m] = time.split(":");
  return Number(h) * 60 + Number(m);
}
