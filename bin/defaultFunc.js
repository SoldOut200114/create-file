const chalk = require("chalk");

module.exports = () => {
  console.log("该包的使用方法如下:");
  console.log(" ");
  console.log(`    ${chalk.green("create-file")} ${chalk.magenta('<directory-url>')}`);
  console.log(" ");
  console.log("举个例子:");
  console.log(" ");
  console.log(`    ${chalk.green("create-file")} ${chalk.magenta('component/index.js')}`);
  console.log(" ");
  console.log(`运行 ${chalk.green("create-file")} ${chalk.magenta('--help')} 可以看到更多信息`);
};
