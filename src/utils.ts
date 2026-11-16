import { parseArgs } from "node:util";

export function add(params: { a: number; b: number }): string {
  const result = params.a + params.b;
  return `${params.a} + ${params.b} = ${result}`;
}

export function getArgs(): { mode: "add" | "debounce"; a: number; b: number } {
  const { values: params } = parseArgs({
    args: process.argv.slice(2),
    options: {
      mode: { short: "m", type: "string" },
      a: { type: "string" },
      b: { type: "string" },
    },
  });

  switch (params.mode) {
    case "add":
      return {
        mode: params.mode,
        a: formatNumberArg(params.a),
        b: formatNumberArg(params.b),
      };
    case "debounce":
      return {
        mode: params.mode,
        a: formatNumberArg(params.a),
        b: formatNumberArg(params.b),
      };
    default:
      console.error(`Invalid mode: ${params.mode}`);
      throw new Error(`Invalid mode: ${params.mode}`);
  }
}

export function showResult(result: string) {
  console.log(result);
}

function formatNumberArg(value?: string): number {
  const a = parseFloat(value ?? "0");

  if (isNaN(a)) {
    console.error(`Invalid value for argument: ${value}`);
    throw new Error(`Invalid value for argument: ${value}`);
  }
  return a;
}
