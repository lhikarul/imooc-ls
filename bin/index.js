#!/usr/bin/env node

const fs = require("fs");
const parse = require("./parseArgs");
const auth = require("./auth");
const getFileType = require("./getFileType");

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
    const stat = fs.statSync(file);
    const mode = stat.mode;
    const authString = auth(mode);
    const fileType = getFileType(mode);

    if (index === files.length - 1) {
      output += fileType + authString + "\t" + file;
    } else {
      output += fileType + authString + "\t" + file + "\n";
    }
  });
}

console.log(output);
