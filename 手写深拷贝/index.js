const deepCopy = (obj) => {
  if (!obj || typeof obj !== "object") return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      newObj[key] = deepCopy(obj[key]);
    } else newObj[key] = obj[key];
  }
  return newObj;
};

const obj = {
  a: 1,
  b: {
    flag: true,
  },
};

const newObj = deepCopy(obj);
console.log(obj, newObj);
obj.a = 2;
obj.b.flag = false;
console.log(obj, newObj);
