import { manager } from "./manager";

export abstract class BaseArg {

  constructor(args: any[], options: any) {

    for (const i in options) {
      (this as any)[i] = options[i];
    }

    const params = manager.getStoredParameters(this);

    args.forEach((v, i) => {
      const index = i + 1;
      const prop = params.find((p) => index === p.index);
      if (prop) {
        (this as any)[prop.propertyName] = v;
      }
    });

  }

  showHelp() {
    const appName = "typemist-sample";
    const parameters = manager.getStoredParameters(this);
    const options = manager.getStoredOptions(this);
    const descriptions = manager.getStoredDescriptions(this);

    const paramsSummary = parameters.map((p) => {
      return `<${p.propertyName}>`;
    }).join(" ");
    const optionsSummary = options.map((p) => {
      return `[--${p.propertyName}]`;
    }).join("");

    console.log(`Usage: ${appName} ${paramsSummary} ${optionsSummary}`);
    console.log(``);
    console.log(`Parameters:`);
    parameters.forEach((p) => {
      const description = manager.getStoredDescription(this, p.propertyName);
      console.log(`  ${p.propertyName}: ${description}`);
    })
    console.log(``);
    console.log(`Options:`);
    options.forEach((p) => {
      const description = manager.getStoredDescription(this, p.propertyName);
      console.log(`  ${p.propertyName}: ${description}`);
    })
  }

}

