// core routes: contain top level api routes
var mailController = require("../controllers/mailercontroller");

module.exports = (app,db) => {

    app.post("/sendMail", mailController.sendMail);

}