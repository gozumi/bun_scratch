export function copying() {
  // Create an object with a value and a circular reference to itself.
  const original: { name: string; itself?: typeof original } = { name: 'MDN' };
  original.itself = original;

  // Clone it
  const clone = structuredClone(original);

  console.log('clone !== original', clone !== original);
  console.log('clone.name === "MDN"', clone.name === 'MDN'); // they do have the same values
  console.log('clone.itself === clone', clone.itself === clone); 
  console.log('original.itself === original', original.itself === original); 
  console.log('clone === original', clone === original); 
}
