const { spawn, exec } = require("child_process")

const executeCommand = (opts) => {
    var child = null;
    try {
        return new Promise((resolve,reject)=>{
            child = exec(opts.command , (err, stdo, stde)=>{
                if(err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log(stdo);
                resolve(stdo);
            });
        })
         
    } catch (e) {
        console.log(e);
    }
    // child.stdout.setEncoding("utf-8");

    // return new Promise((resolve, reject) => {
    //     var commandOutput = "";

    //     child.stdout.on('data', (chunk) => {
    //         commandOutput += chunk;
    //     });

    //     child.stderr.on('data', (chunk) => {
    //         commandOutput += chunk;
    //     });

    //     child.on('error',(err)=>{
    //         reject(err);
    //     });

    //     child.on('close', (code) => {
    //         console.log(commandOutput + "\n==================\nCode: " + code);
    //         resolve({ commandOutput, code });
    //     });
    // });
}

module.exports = {
    executeCommand
}