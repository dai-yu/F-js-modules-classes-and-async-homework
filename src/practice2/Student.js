export class Student {
  constructor(name, className) {
    this.name = name;
    this.className = className;
    this.study = this.study.bind(this);
  }

  study() {
    console.log(`${this.name} is moving`);
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
