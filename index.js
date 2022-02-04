#!/usr/bin/env node

//const fs = require('fs');
//const archiver = require('archiver');

exports.getPath = () => {
  return __dirname; 
}

exports.getName = () => {
  return __filename;
}

exports.getDir = ()=> {
  return process.cwd();
}

const getDim = (Name)=> {
  console.log(Name);
  console.log(process.cwd());
  return;
}

getDim("Raj Bhai");

