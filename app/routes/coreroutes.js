// core routes: contain top level api routes

module.exports = (app,db) => {

    app.post("/sendMail", (req,res)=>{
        
        return res.send(req.body);
    });

}