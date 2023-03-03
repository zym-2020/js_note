fn();           //1

var fn;

function fn() {
  console.log(1);
}

fn = function () {
  console.log(2);
};

fn();           //2


/**
 * var fn与function冲突，函数优先
 */
