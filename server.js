// Nodejs encryption with CTR
const express = require("express");
const app = express();
const ZKLib = require('zklib');
 
ZK = new ZKLib({
  ip: '210.210.3.105',
  port: 80,
  inport: 3000,
  timeout: 5000,
});
 
// connect to access control device
ZK.connect(function(err) {
  if (err) throw err;
 
  // read the time info from th device
  ZK.getTime(function(err, t) {
    // disconnect from the device
    ZK.disconnect();
 
    if (err) throw err;
 
    console.log("Device clock's time is " + t.toString());
  });
});

app.listen(3000,function(){
console.log("Server is running on port 3000");

});
