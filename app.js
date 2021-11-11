const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })
   
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});
