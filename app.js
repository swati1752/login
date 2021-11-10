const express = require('express');

const app = express();


app.get('/', function (req, res) {
    res.write('index.html');
  })
   
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});
