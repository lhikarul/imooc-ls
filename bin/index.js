#!/usr/bin/env node

const fs = require("fs");
const parse = require("./parseArgs");

const dir = process.cwd();

const { args, isAll, isList, isDevelopment } = parse();

if (!isAll && !isList && !isDevelopment) {
  // 排除以 . 開頭的文件
  let files = fs.readdirSync(dir);
  files = files.filter((file) => file.indexOf(".") !== 0);
  let output = "";
  files.forEach((file) => (output += file + "             "));
  console.log(output);
}
