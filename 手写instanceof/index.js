const myInstanceof = (L, R) => {
  //对于左侧参数如果是非对象直接返回false
  if (Object(L) !== L) return false;
  //对于左侧参数如果是非对象直接返回false
  if (typeof R !== "function" && !R.prototype) throw new TypeError();
  let temp = L.__proto__;
  while (temp !== null) {
    if (temp === R) return true;
    temp = temp.__proto__;
  }
  return false;
};
