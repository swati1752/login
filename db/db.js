const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/apiDB",{useNewUrlParser:true, useUnifiedTopology:true})
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));

const useSchema = new mongoose.Schema ({
  name: 
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

// const User = mongoose.model('use', useSchema);

// const user = new useSchema ({
//   name:"A",
//   pass:"123"
// });

user.save();