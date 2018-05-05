import minimist = require("minimist");
import { BaseArg } from "./BaseArg";

export { Option } from "./decorators";
export { Parameter } from "./decorators";
export { Description } from "./decorators";
export { BaseArg };

interface Newable<T> {
  new (...args: any[]): T;
}

export function typemist<T extends BaseArg>(argv: any, klass: Newable<T>): T {

  const {_, ...options} = minimist(argv);

  const obj = new klass(_, options);

  return obj;
}

