var coreServices = require("./coreservices");

const sendMail = (mailOpts) => {

    coreServices.executeCommand({
        command: "mutt",
        arguments: [
            "-s",
            "Your Agreement Is Attached",
            "-e",
            "set content_type=text/html",
            mailOpts.email,
            "<",
            "~/email_test.html"
        ]
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