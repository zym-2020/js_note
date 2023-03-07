async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async1();
setTimeout(() => {
  console.log("timeout");
}, 0);

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");


/**
 * 执行script脚本，此时宏任务队列[script]，微任务队列[]
 * 1. 执行async1输出async1 start
 * 2. 执行async2输出async2
 * 3. 将console.log("async1 end")加入微任务队列
 * 4. 将setTimeout加入宏任务队列
 * 5. 输出promise1
 * 6. 将console.log("promise2")加入微任务队列
 * 6. 输出script end
 * 
 * 此时宏任务队列[setTimeout]，微任务队列[async1 end, promise2]
 * 微任务为上个宏任务所产生，所以必须先执行完上一个宏任务的所有微任务才能执行下一个宏任务
 * 1. 执行微任务，输出async1 end
 * 2. 执行微任务，输出promise2
 * 3. 执行宏任务，输出timeout
 */