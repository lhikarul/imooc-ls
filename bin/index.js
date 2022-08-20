#!/usr/bin/env node

const parse = require("./parseArgs");

const { args, isAll, isList } = parse();

console.log(args, isAll, isList);
