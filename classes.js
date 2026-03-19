export class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

export class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  greet() {
    console.log(`Hey ${this.name} in ${this.school}!`);
  }
}

export class Austrian extends Person {
  static origin = 'Austria';
  #city = 'Vienna';
  greet() {
    console.log(`Hello ${this.name} from ${this.#city}!`);
  }
  get city() {
    return this.#city;
  }
}

console.log('Hello from classes.js!');
