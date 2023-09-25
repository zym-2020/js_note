let arr = [1, [2, [3, 4]]];
function flatten(arr) {
  while (arr.some((i) => Array.isArray(i))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]

let arr1 = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.reduce(function(pre, cur){
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
console.log(flatten(arr));//  [1, 2, 3, 4，5]


