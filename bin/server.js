const path = require("path");
const fs = require("fs");
const exec = require("child_process").exec;
const { createServer } = require("http-server");

const server = (inputPath) => {
  let url = inputPath;
  console.log(process.cwd());
  exec(
    `npx http-server ${url ? path.join(process.cwd(), url) : process.cwd()} -o`,
    function (err, out) {
      !err && console.log("服务器启动成功");
      err && console.log(err);
    }
  );
};

const run = (inputPath) => {
  server(inputPath);
};

module.exports = run;
