var coreServices = require("./coreservices");

const sendMail = (mailOpts) => {
    console.log(mailOpts);
    
    coreServices.executeCommand({
        command: "sh ~/mailer/muttmailer_server/app/scripts/email.sh "+mailOpts.email+" "+ mailOpts.agreementDoc+" "+mailOpts.name,
       
    }).then((res, rej) => {
        if (res) {
            console.log("done");
        } else if (rej) {
            console.log(rej);
        }
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    sendMail
}