function solution(genres, plays) {
  const answer = [];
  const genreMap = new Map();

  // 장르별로 곡 데이터 분류
  genres.forEach((genre, i) => {
    if (!genreMap.has(genre)) {
      genreMap.set(genre, { total: 0, songs: [] });
    }
    genreMap.get(genre).total += plays[i];
    genreMap.get(genre).songs.push({ id: i, play: plays[i] });
  });

  // 장르별 총 재생 횟수 기준으로 정렬
  const sortedGenres = [...genreMap.entries()].sort(
    (a, b) => b[1].total - a[1].total
  );

  // 각 장르에서 최대 2곡씩 선택
  for (const [genre, { songs }] of sortedGenres) {
    const sortedSongs = songs.sort((a, b) => {
      if (b.play === a.play) {
        return a.id - b.id;
      }
      return b.play - a.play;
    });

    // 최대 두 곡 선택
    sortedSongs.slice(0, 2).forEach((song) => answer.push(song.id));
  }

  return answer;
}
