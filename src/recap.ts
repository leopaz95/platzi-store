let personName: string;
const age = 19;
const suma = (a: number, b: number) => {
  return a + b;
};

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

personName = 'Lea';
const test1 = new Person(age, personName);

personName = 'Lea';
const test2 = new Person(age, personName);
