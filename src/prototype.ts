export function prototypeExamples() {
  const base = { colour: 'red' };
  const child = Object.create(base);

  console.log(`child colour: ${child.colour}`);
  console.log(
    `does child have it's own colour: ${child.hasOwnProperty('colour')}`,
  );
  child.colour = 'blue';
  console.log(`child new colour: ${child.colour}`);
  console.log(
    `does child have it's own colour: ${child.hasOwnProperty('colour')}`,
  );

  const child2 = Object.create(base);
  console.log(`child2 colour: ${child2.colour}`);

  console.log("child's prototype:", Object.getPrototypeOf(child));
}
