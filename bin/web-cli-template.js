#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');

const template = {
    'react': `
import React, { Component } from 'react';

export default class Index extends Component{
    constructor(props) {
    super(props);
    this.state = {
        //
    };
}

render() {
    return (
        <div></div>
    );
}
}`,
    'hook': `
import React from 'react';

const Component = () => {
    return (
        <div>
            hook
        </div>
    );
}

export default React.memo(Component);
    `,
    'hook-mobx': `
import React from 'react';
import { inject, observer } from 'mobx-react';

const Component = observer(() => {
    return (
        <div>
            hook-mobx
        </div>
    );
});
export default React.memo(inject()(Component));
`
};

program.usage('<template>').parse(process.argv);

// 根据输入，获取template名称
let projectName = program.args[0];
let type;
switch (projectName) {
    case 'react':
        type = template.react;
        break;
    case 'hook':
        type = template.hook;
        break;
    case 'hook-mobx':
        type = template["hook-mobx"];
        break;
    default:
        type = template.react;
}

if (!projectName) {  // project-name 必填
    // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
    program.help();
    return;
}

go();

function go() {
    fs.writeFile('index.js', type, 'utf8', function(error) {
        if(error) {
            console.log(error);
            return false;
        }
        console.log('success');
    });
}
