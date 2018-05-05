import { typemist, Option, Opt, Parameter, Description } from "./index";

class SampleRunOption extends Opt {

  @Description("a year")
  @Option
  year: number;

  @Description("a month")
  @Option
  month: number;

  @Description("iso week number or keyword 'last'")
  @Option
  week: string | number;

  @Option
  outputRecords: boolean;

  @Description("command a")
  @Parameter(1)
  command: string;

  @Parameter(2)
  subcommand: string;

  @Option
  help: boolean;

}

const opt = typemist<SampleRunOption>(process.argv.slice(2), SampleRunOption);

if (opt.help) {
  opt.showHelp();
} else {
  console.log(opt);
}

process.exit();

