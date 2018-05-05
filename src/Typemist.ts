import { manager } from "./manager";
import { Opt } from "./Opt";

export class Typemist {

  private options: any[];
  private parameters: any[];
  private descriptions: any[];

  constructor() {
    this.options = [];
    this.parameters = [];
    this.descriptions = [];
  }
  storeOption(target: any, propertyName: string, info: any) {
    this.options.push({target, propertyName, info});
  }
  storeParameter(target: any, propertyName: string, index: number) {
    this.parameters.push({target, propertyName, index});
  }
  storeDescription(target: any, propertyName: string, description: string) {
    this.descriptions.push({target, propertyName, description});
  }


  getStoredOptions<T extends Opt>(obj: T) {
    return manager.options.filter((p) => {
      return obj instanceof p.target.constructor;
    });
  }

  getStoredParameters<T extends Opt>(obj: T) {
    return manager.parameters.filter((p) => {
      return obj instanceof p.target.constructor;
    });
  }

  getStoredDescriptions<T extends Opt>(obj: T) {
    return manager.descriptions.filter((p) => {
      return obj instanceof p.target.constructor;
    });
  }
  getStoredDescription<T extends Opt>(obj: T, key: string): string {
    const desc = manager.descriptions.find((p) => {
      return obj instanceof p.target.constructor && p.propertyName === key;
    });
    return desc && desc.description ? desc.description : "";
  }
}


