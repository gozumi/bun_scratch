export function comparison() {
  // console.log(`'' == 0: ${'' == 0}`);
  // console.log(`'0' == 0: ${'0' == 0}`);
  // console.log(`'' == '0': ${'' == '0'}`);
  // console.log(`[] == false: ${[] == false}`);
  // console.log(`[] == ![]: ${[] == ![]}`);
  console.log(`null == undefined: ${null == undefined}`);
  // console.log(`NaN === NaN: ${NaN === NaN}`);
  // console.log(`isNaN('hello'): ${isNaN('hello')}`);
  console.log(`Number.isNaN('hello'): ${Number.isNaN('hello')}`);
  console.log(`Number.isNaN(Number('hello')): ${Number.isNaN(Number('hello'))}`);
  console.log(`Number.isNaN([]): ${Number.isNaN([])}`);
}
