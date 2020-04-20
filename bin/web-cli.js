#!/usr/bin/env node

const program = require('commander');

program.version('1.0.0')
    .usage('<command> [项目名称]')
    .command('hello', 'hello')
    .command('init', '创建新项目')
    .command('template', '当前目录下创建模板, [react, hook, hook-mobx]')
    .parse(process.argv);
