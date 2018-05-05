Typemist: augments minimist with TypeScript and decorators.

## Usage

See src/sample.ts

## Supported API

- `@Paramter(number)`
- `@Option`
- `@Description(string)`

## Requirement

in tsconfig.json
```
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

