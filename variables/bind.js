
class StrComp {
  constructor(id) {
    this.id = id;
  }

  compute(str) {
    return `computed=${str}_${this.id}`;
  }

  toString() {
    return `StrComp ${this.id}`;
  }
}

const p = new StrComp(8);

console.log(`p=${p.toString()}`);


// ########## bind ###########

const run = (f, s) => {
  f(s);
};

console.log(`p.compute('RET')=${run(p.compute/* .bind(p) */, 'RET')}`);
