const mongoose= require("mongoose");

//get data from .env export mongo in Atlas
const URI= "mongodb+srv://Alishba:SSJ6V6x1bjHG8hej@cluster0.jpqwe.mongodb.net/mern-admin"
//const URI= process.env.MONGODB_URL; 

const connectDb= async() =>{
  try {
    await mongoose.connect(URI);
    console.log("Mongodb connected")
   }
    catch (error) {
     console.error("database connection failed");
    
   }
}



module.exports= connectDb;