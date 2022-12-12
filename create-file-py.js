#!/usr/bin/env node
const program = require("commander");
const pkg = require("./package.json");

const defaultRun = () => {
  if (!program.args.length) {
    require("./bin/defaultFunc")();
  }

  if (program.args.length) {
    require("./bin/create")(program.args[0]);
  }
};

program
  .version(pkg.version, "-v, --version", "获取包版本信息")
  .usage("[options] <file ...>")
  .helpOption("-h, --help", "获取包帮助信息")
  .option("-r, --remove", "删除该路径下的文件")
  .option("-d, --dir", "创建文件夹")
  .option("-s, --server", "在该路径下启动服务器")
  .action((opts, p) => {
    const keys = Object.keys(opts);
    console.log(keys);
    if (!keys.length) {
      defaultRun();
    }
    if (opts.remove) {
      require("./bin/remove")(program.args[0]);
    }
    if (opts.dir) {
      require("./bin/createDir")(program.args[0]);
    }
    if (opts.server) {
      require("./bin/server")(program.args[0]);
    }
  });

program.parse(process.argv);
