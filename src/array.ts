export function arrayExamples() {
  const arr1 = [0, 1, 2, [3, 4]];
  console.log('arr1: ', arr1);
  console.log('arr1.flat(): ', arr1.flat());
  console.log('=====>');

  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log('arr2: ', arr2);
  console.log('arr2.flat(): ', arr2.flat());
  console.log('=====>');

  console.log('arr2.flat(2): ', arr2.flat(2));
  console.log('=====>');

  console.log('arr2.flat(Infinity): ', arr2.flat(Infinity));

  const arr3 = [0, 2, [1, [3, [4, 5, [6, 7, 8, 9]]]]];

  const result = arr3.flatMap((el) => (el === 2 ? [2, 2] : el));

  console.log('arr3.flatMap((el) => (el === 2 ? [2, 2] : el))');
  console.dir(result, { depth: null });
}
