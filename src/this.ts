const foo = {
  name: 'Foo Foo',
  counter: 0,
  greet(greeting: string) {
    console.log(`${greeting} ${this.name}`);
  },
  startCounter() {
    const c = () => this.counter++;
    c();
  },
};

const bar = { name: 'Bar Bar' };

export function thisExamples() {
  foo.greet('Hello, I am');

  // const greet2 = foo.greet;

  // greet2('A bad greeting'); // this fails because the reference to `this` is lost

  foo.greet.call(bar, 'Hello from another caller');
  foo.greet.apply(bar, ['Welcome from another application']);

  const boundGreeter = foo.greet.bind(bar);
  boundGreeter('A bound greeting');

  console.log(`Foo counter before: ${foo.counter}`);
  foo.startCounter();
  console.log(`Foo counter after: ${foo.counter}`);
}
