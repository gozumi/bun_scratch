export function objectExamples() {
  const object = {
    a: 'some string',
    b: 42,
  };

  console.log('Object.entries(object)')
  console.dir(Object.entries(object))
  console.log('=====>')


  for (const [key, value] of Object.entries(object)) {
    console.log(`key ${key}: value '${value}'`);
  }
}
