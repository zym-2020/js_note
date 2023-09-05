const promiseAll = (list) => {
  return new Promise((resolve, rej) => {
    const res = [];
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      Promise.resolve(list[i])
        .then((value) => {
          count++;
          res[i] = value;
          if (count === list.length) resolve(res);
        })
        .catch((e) => rej(e));
    }
  });
};
