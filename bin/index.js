#!/usr/bin/env node

const fs = require("fs");
const parse = require("./parseArgs");

const dir = process.cwd();

const { args, isAll, isList, isDevelopment } = parse();

let files = fs.readdirSync(dir);
let output = "";

if (!isAll) {
  // 排除以 . 開頭的文件
  files = files.filter((file) => file.indexOf(".") !== 0);
}

if (!isList) {
  files.forEach((file) => (output += file + "             "));
} else {
  files.forEach((file, index) => {
    if (index === files.length - 1) {
      output += file;
    } else {
      output += file + "\n";
    }
  });
}

console.log(output);
