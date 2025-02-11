//controllers are typically used to procces incoming request,interact with model and send response to back client
const {Users}= require("../model/user-model");

//    *_____________ Home logic _______________*

const home= (req, res) => {
   try{
       res
      .send("Hi, My name is Alishba to acccept data from router in route OR CONTROLLER");
   }
   catch(error){
  console.log("error")
   }
}


//    *_____________ Register logic _______________*

const Register= async(req, res) =>{
  try{
    console.log(req.body);

    const {username, email, phone, password }= req.body;

    const userExsist= await Users.findOne({ email });

    if(userExsist){
    return req.status(400).json({ msg: "Email already exsists"});
 }

 //hash the password

  const userCreated= await Users.create( {username, email, phone, password} );

  res.status(201).json({
    msg: "registration successful", 
    token: await userCreated.generateToken(),
    userId: userCreated._id.toString(),
  });
  

  }
  catch(error){
    res.status(500).json("internal server error");
  }

};

//    *_____________ Login logic _______________*

const login= async(req, res) =>{
  try {
    
    const {email, password}= req.body;

    const userExist= await Users.findOne({email});
    console.log(userExist);

    if(!userExist){
      return res.status(400).json({msg: "invalid Credentials"});
    }
//compare password
   //const user= await bcrypt.compare(password, userExist.password);

   const user= await userExist.comparePassword(password);

    if(user){
      res.status(201).json({
        msg: "Login successful", 
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }

    else{
      res.status(401).json({ message: "invalid email or password"})
    }

  } catch (error) {
    return res.status(500).json({ msg: "already Exist"});
  }
}

  
module.exports= {
  home,
  Register,
  login
};





