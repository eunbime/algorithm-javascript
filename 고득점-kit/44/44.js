function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;
  let lastCamera = -30001;

  for (const [start, end] of routes) {
    if (start > lastCamera) {
      cameras++;
      lastCamera = end;
    }
  }

  return cameras;
}
