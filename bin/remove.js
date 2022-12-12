const path = require("path");
let exec = require("child_process").exec;

module.exports = (inputPath) => {
  exec(`rm -rf ${path.join(process.cwd(), inputPath)}`, function (err, out) {
    !err && console.log('删除成功');
    err && console.log("请确认该路径是否正确");
  });
};
