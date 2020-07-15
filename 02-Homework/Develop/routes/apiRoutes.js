var noteData = require("../db/noteData")


module.exports = function(app) {
  
    app.get("/api/waitlist", function(req, res) {
      res.json(noteData);
    });
  
  
    app.post("/api/tables", function(req, res) {
      
        tableData.push(req.body);
 
    })

}