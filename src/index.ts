import { debounce } from "./debounce.ts";
import { getArgs, add, showResult, search } from "./utils.ts";

main();

function main() {
  const args = getArgs();

  switch (args.mode) {
    case "add":
      showResult(add({ a: args.a!, b: args.b! }));
      break;
    case "debounce":
      const debouncedSearch = debounce(search, 300);
      debouncedSearch("r");
      debouncedSearch("re");
      debouncedSearch("res");
      debouncedSearch("rese");
      debouncedSearch("resea");

      break;
    default:
      console.error(`Invalid mode: ${args.mode}`);
      throw new Error(`Invalid mode: ${args.mode}`);
  }
}
