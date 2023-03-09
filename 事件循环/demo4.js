function wait() {
  return new Promise((resolve) => setTimeout(resolve, 10 * 1000));
}

async function main() {
  console.time();
  const x = await wait();
  const y = await wait();
  const z = await wait();
  console.timeEnd();
}
main();
