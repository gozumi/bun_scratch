import { parseArgs } from "node:util";

export function add(a: number, b: number): number {
  return a + b;
}

export function getArgs() {
  const { values: params } = parseArgs({
    args: process.argv.slice(2),
    options: {
      a: {
        type: "string",
      },
      b: {
        type: "string",
      },
    },
  });

  return {
    a: formatArg(params.a),
    b: formatArg(params.b),
  };
}

function formatArg(value?: string): number {
  const a = parseFloat(value ?? "0");

  if (isNaN(a)) {
    console.error(`Invalid value for argument: ${value}`);
    throw new Error(`Invalid value for argument: ${value}`);
  }
  return a;
}
