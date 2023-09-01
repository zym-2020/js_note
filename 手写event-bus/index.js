class EventEmitter {
  constructor() {
    this.list = {};
  }

  on(event, cb) {
    if (this.list[event] === undefined) this.list[event] = [];
    this.list[event].push(cb);
  }

  off(event, cb) {
    if (this.list[event]) {
      for (let i = 0; i < this.list[event].length; i++) {
        if (this.list[event][i] === cb) {
          this.list[event].splice(i, 1);
          return;
        }
      }
    }
  }

  emit(event, ...args) {
    if (this.list[event]) {
      this.list[event].forEach((item) => {
        item(...args);
      });
    }
  }
}

const eventEmitter = new EventEmitter();
const add = (a, b) => console.log(a + b);
const subtraction = (a, b) => console.log(a - b);

eventEmitter.on("test", add);
eventEmitter.on("test", subtraction);
eventEmitter.emit("test", 2, 1);
eventEmitter.off("test", subtraction);
eventEmitter.emit("test", 3, 1);
