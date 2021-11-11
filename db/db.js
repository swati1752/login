const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/apiDB",{useNewUrlParser:true, useUnifiedTopology:true})
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));

const useSchema = new mongoose.Schema ({
    email: 
    {
        type:String, 
        required: true
    },
    pass: 
    {
        type:String,
        required: true
    }
});

const User = new mongoose.model("User",useSchema);

User.users.push({name:"A", pass:"123"});

User.save();