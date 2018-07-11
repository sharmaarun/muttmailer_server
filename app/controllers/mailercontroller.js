var mailerService = require("../services/mailerservice");

const fs = require("fs");


const sendMail = (req, res) => {
    try {
        
        // linux specific code
        // update the email html
        var htmlContent = fs.readFileSync("app/scripts/email_template.html",{encoding:'utf-8'});
        console.log(req.body);
        htmlContent = htmlContent.replace("{{name}}",req.body.name)
        .replace("{{amount}}",req.body.amount)
        .replace("{{duration}}",req.body.duration)
        .replace("{{emi}}",req.body.emi)
        .replace("{{agentName}}",req.body.agentName)
        .replace(new RegExp("{{agentPhone}}", 'g'),req.body.agentPhone)
        
        var mailHtml = "email_"+req.body.name.split(" ")[0]+".html";
        req.body.mailHtml = mailHtml;
        req.body.agreementDoc = "LOANAGREEMENT_"+req.body.name.split(" ")[0].toUpperCase()+".docx";
        fs.writeFileSync(mailHtml, htmlContent, {encoding:"utf-8"});
        

        mailerService.sendMail(req.body);
        res.send(req.body);
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    sendMail: sendMail
};