var mailerService = require("../services/mailerservice");


const sendMail = (req, res) => {
    try {
        console.log(req.body);
        mailerService.sendMail(req.body);
        res.send(req.body);
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    sendMail: sendMail
};