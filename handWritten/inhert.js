function parent(name) {
  this.name = name;
}

function child(name, age) {
  // super(name);
  Parent.call(this, name);
  this.age = age;
}
child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

class parent {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name, "is eating");
  }
}

class child extends parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
