#!/usr/bin/env node

const {basename} = require('path');

const dir = ()=> {
  console.log(process.cwd());
  console.log(basename(process.cwd()));
}

dir();