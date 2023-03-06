let str = "aascdascd\nwebdfbdfbdfbfd\ngcsdfcwdfwfwe";
// console.log(str)
console.log(str.replace(/^\w/g, "0"));
console.log("----------");
console.log(str.replace(/^\w/gm, "0"));
