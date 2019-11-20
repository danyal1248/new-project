const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended = True}));

app.get("/",function(req,res){
res.send("hey buddy");
});

app.listen(3000,function(){
console.log("Server is running on port 3000");

});
