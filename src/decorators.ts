import { manager } from "./manager";

export function Parameter(index: number): Function {
  return (target: any, propertyName: string) => {
    manager.storeParameter(target, propertyName, index);
  };
}
export function Description(description: string): Function {
  return (target: any, propertyName: string) => {
    manager.storeDescription(target, propertyName, description);
  };
}

export function Option(name: string): Function;
export function Option(target: any, propertyName: string): void;
export function Option(...args: any[]): Function|void {

  if (args.length >= 2) {
    _option(args[0], args[1]);
    return;
  } else {
    return (...args2: any[]) => {
      _option(args2[0], args2[1], args);
    };
  }
}

function _option(target: any, propertyName: string, args?: any) {
  const type = inferType(target, propertyName);
  manager.storeOption(target, propertyName, type);
}

function inferType(target: any, propertyName: string): string {

  if (Reflect && Reflect.getMetadata) {
    const type = Reflect.getMetadata("design:type", target, propertyName);
    switch (type) {
      case String:
        return "String";
      case Object:
        return "Object";
      case Number:
        return "Number";
      case Boolean:
        return "Boolean";
      case Date:
        return "Date";
      case Function:
        return "Function";
    }
  }

}
