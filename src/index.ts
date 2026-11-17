import { debounce, throttle } from './debounce-throttle.ts';
import { add, foo, getArgs, search, showResult } from './utils.ts';

main();

function main() {
  const args = getArgs();
  const debouncedSearch = debounce(search, 300);
  const debouncedFoo = debounce(foo, 300);
  const throttleFoo = throttle(foo, 10);

  switch (args.mode) {
    case 'add':
      showResult(add({ a: args.a!, b: args.b! }));
      break;
    case 'debounce':
      debouncedSearch('r');
      debouncedSearch('re');
      debouncedSearch('res');
      debouncedSearch('rese');
      debouncedSearch('resea');
      debouncedFoo('two', 2);

      break;
    case 'throttle':
      for (let i = 0; i < 1000000; i++) {
        throttleFoo(`${i}`, i);
      }

      break;
    default:
      console.error(`Invalid mode: ${args.mode}`);
      throw new Error(`Invalid mode: ${args.mode}`);
  }
}
