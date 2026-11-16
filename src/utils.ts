import { parseArgs } from "node:util";

export function add(a: number, b: number): number {
  return a + b;
}

export function getArgs() {
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
        a: formatNumberArg(params.a),
        b: formatNumberArg(params.b),
      };
    default:
      console.error(`Invalid mode: ${params.mode}`);
      throw new Error(`Invalid mode: ${params.mode}`);
  }
}

function formatNumberArg(value?: string): number {
  const a = parseFloat(value ?? "0");

  if (isNaN(a)) {
    console.error(`Invalid value for argument: ${value}`);
    throw new Error(`Invalid value for argument: ${value}`);
  }
  return a;
}
