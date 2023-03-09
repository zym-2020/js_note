function wait() {
  return new Promise((resolve) => setTimeout(resolve, 10 * 1000));
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();


/**
 * 结果：10s左右
 * 因为三个wait是同时执行，await x，await y，await z只是再等待后续的.then微任务处理（很明显，此处没有任何处理）
 * 
 * 稍微改造结果为30s左右，见demo4
 */