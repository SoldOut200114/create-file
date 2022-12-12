const path = require("path");
const fs = require("fs");
const exec = require("child_process").exec;

const splitPath = (inputPath) => {
  if (inputPath.includes("/")) {
    return inputPath.split("/");
  } else {
    return [inputPath];
  }
};

const createFile = (inputPath) => {
  let paper = inputPath.pop();
  let url = "";
  let isFile = false;
  if (inputPath.length) {
    inputPath.map((i, index) => {
      url = url ? url + "/" + i : i;
      try {
        let stats = fs.statSync(path.join(process.cwd(), url));
        if (stats.isFile()) {
          isFile = true;
        }
      } catch (err) {
        fs.mkdirSync(path.join(process.cwd(), url));
        if (!paper && index + 1 === inputPath.length) {
          console.log("创建成功");
        }
      }
    });
  }
  url = url ? url + "/" + paper : paper;
  try {
    let stats = fs.statSync(path.join(process.cwd(), url));
  } catch {
    if (isFile) {
      console.log("该路径中某段路径是文件，请检查路径是否正确");
      return;
    }
    fs.writeFileSync(path.join(process.cwd(), url), "", (e) => {
      console.log(e);
    });
    exec(`code ${path.join(process.cwd(), url)}`, function (err, out) {
      !err && console.log("创建成功");
      err && console.log(err);
    });
  }
};

const currying = (...args) => {
  return (path) => args.reduce((a, b) => a(b(path)));
};

const run = (inputPath) => {
  if (!inputPath) {
    console.log("请输入需要创建的文件路径");
    return;
  }
  currying(createFile, splitPath)(inputPath);
};

module.exports = run;
