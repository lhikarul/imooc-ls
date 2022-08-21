#!/usr/bin/env node

const fs = require("fs");
const parse = require("./parseArgs");
const auth = require("./auth");
const getFileType = require("./getFileType");
const getFileUser = require("./getFileUser");

const dir = process.cwd();

const { isAll, isList } = parse();

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
    const fileUser = getFileUser(stat);

    if (index === files.length - 1) {
      output += fileType + authString + "\t" + fileUser + "\t" + file;
    } else {
      output += fileType + authString + "\t" + fileUser + "\t" + file + "\n";
    }
  });
}

console.log(output);
