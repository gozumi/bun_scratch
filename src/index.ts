import { classExamples } from './classes.ts';
import { comparison } from './comparison.ts';
import { copying } from './copying.ts';
import { debounce, throttle } from './debounce-throttle.ts';
import { prototypeExamples } from './prototype.ts';
import { thisExamples } from './this.ts';
import { add, foo, getArgs, search, showResult } from './utils.ts';

main();

function main() {
  const args = getArgs();
  const debouncedSearch = debounce(search, 50);
  const debouncedFoo = debounce(foo, 300);
  const throttleFoo = throttle(foo, 10);

  switch (args.mode) {
    case 'add':
      showResult(add({ a: args.a!, b: args.b! }));
      break;
    case 'debounce':
      for (let i = 0; i < 100; i++) {
        const group = Math.floor(i / 2);
        setTimeout(() => debouncedSearch(`${i}`), group * 200 + i);
      }

      for (let i = 0; i < 100; i++) {
        debouncedFoo('foo', i);
      }

      break;
    case 'throttle':
      for (let i = 0; i < 1000000; i++) {
        throttleFoo(`${i}`, i);
      }
      break;
    case 'this':
      thisExamples();
      break;
    case 'prototype':
      prototypeExamples();
      break;
    case 'class':
      classExamples();
      break;
    case 'comparison':
      comparison();
      break;
    case 'copying':
      copying();
      break;
    default:
      console.error(`Invalid mode: ${args.mode}`);
      throw new Error(`Invalid mode: ${args.mode}`);
  }
}
