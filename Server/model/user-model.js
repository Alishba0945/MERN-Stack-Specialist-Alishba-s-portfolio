const mongoose= require ("mongoose");
const bcrypt= require("bcryptjs");
const jwt = require('jsonwebtoken');

// **Schema**
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  // ✅ Fixed
  },
  email: {
    type: String,
    required: true,  // ✅ Fixed
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {   // ✅ Typo fix: 'isAdmine' → 'isAdmin'
    type: Boolean,
    default: false,
  },
});


//compare the password
userSchema.methods.comparePassword= async function () {
   return  bcrypt.compare(password, this.password);
}

//use pre method
userSchema.pre("save", async function(next){

  //console.log("pre method", this );
    const client= this;
  if(!client.isModified("password")){
    next();
  }
  
  try {
  //hash the password
   const saltRound = await bcrypt.genSalt(8);
   const hash_password =  await bcrypt.hash(client.password, saltRound);
    client.password = hash_password;
} 
  catch (error) {
    next(error);
  }

})

//         ** json web token is store onto local stories or cookies** 

//jwt.sign ** jwt.verifying

userSchema.methods.generateToken= async function(){
   
  try {
   return jwt.sign(
     {
     userId : this._id.toString(),
     email : this.email,
     isAdmine: this.isAdmin,
   },
     process.env.JWT_SECRET,
       {
   expiresIn: "30d",
   }
  
 );
   
  } catch (error) {
   console.log(error);
  }
};



// **Model**
const Users= new mongoose.model("User", userSchema);


// **export of Model**
module.exports= {Users};






