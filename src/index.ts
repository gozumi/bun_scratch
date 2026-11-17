import { debounce } from './debounce.ts';
import { add, foo, getArgs, search, showResult } from './utils.ts';

main();

function main() {
  const args = getArgs();
  const debouncedSearch = debounce(search, 300);
  const debouncedFoo = debounce(foo, 300);

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
    default:
      console.error(`Invalid mode: ${args.mode}`);
      throw new Error(`Invalid mode: ${args.mode}`);
  }
}
