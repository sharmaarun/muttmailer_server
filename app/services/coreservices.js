const { spawn } = require("child_process")

const executeCommand = (opts) => {
    var child = null;
    try {
         child = spawn(opts.command, opts.arguments);
    } catch (e) {
        console.log(e);
    }
    child.stdout.setEncoding("utf-8");

    return new Promise((resolve, reject) => {
        var commandOutput = "";

        child.stdout.on('data', (chunk) => {
            commandOutput += chunk;
        });

        child.stderr.on('data', (chunk) => {
            commandOutput += chunk;
        });

        child.on('error',(err)=>{
            reject(err);
        });

        child.on('close', (code) => {
            //console.log(commandOutput + "\n==================\nCode: " + code);
            resolve({ commandOutput, code });
        });
    });
}

module.exports = {
    executeCommand
}