import { getArgs, add, showResult } from "./utils.ts";

main();

function main() {
  const args = getArgs();

  switch (args.mode) {
    case "add":
      showResult(add(args));
      break;
    case "debounce":
      console.log("Debounce mode is not implemented yet.");
      break;
    default:
      console.error(`Invalid mode: ${args.mode}`);
      throw new Error(`Invalid mode: ${args.mode}`);
  }
}
