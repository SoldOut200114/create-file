const path = require("path");
const fs = require("fs");
const exec = require("child_process").exec;

const createDir = (inputPath) => {
  let url = inputPath;
  if (inputPath.length) {
    try {
      let stats = fs.statSync(path.join(process.cwd(), url));

      if (stats.isDirectory() || stats.isFile()) {
        console.log("已经存在相同名称的文件或文件夹");
      }
    } catch {
      try {
        fs.mkdirSync(path.join(process.cwd(), url));
        console.log("创建成功");
      } catch (e) {
        console.log("请检查传入的路径是否符合命名规范");
      }
    }
  }
};

const run = (inputPath) => {
  if (!inputPath) {
    console.log("请输入需要创建的文件路径");
    return;
  }
  createDir(inputPath);
};

module.exports = run;
