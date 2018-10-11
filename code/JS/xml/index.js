var express = require("express");
var records = require("./md-query-node-copy.js").records

var app = express();
app.get("/url", (req, res, next) => {
 res.json(records);
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
