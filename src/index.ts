import minimist = require("minimist");
import { Opt } from "./Opt";

export { Option } from "./decorators";
export { Parameter } from "./decorators";
export { Description } from "./decorators";
export { Opt };

interface Newable<T> {
  new (...args: any[]): T;
}

export function typemist<T extends Opt>(argv: any, klass: Newable<T>): T {

  const {_, ...options} = minimist(argv);

  const obj = new klass(_, options);

  return obj;
}

