const coreRoutes = require("./coreroutes");

module.exports = (app, db) => {
    coreRoutes(app,db);
}