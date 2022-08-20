#!/usr/bin/env node

const parse = require("./parseArgs");

const { args, isAll, isList, isDevelopment } = parse();

console.log(args, isAll, isList, isDevelopment);
