#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const download = require('../lib/download');

program.usage('<template>').parse(process.argv);

// 根据输入，获取template名称
let projectName = program.args[0];

if (!projectName) {  // project-name 必填
    // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
    program.help();
    return;
}

go();

function go() {
    console.log('start template', projectName);
    download('https://github.com:FridayDai/react-mobx-scaffold#template-react', path.resolve(__dirname))
        .then(target => console.log('finish template ', target))
        .catch(xhr => console.log(xhr));
}
