require('dotenv').config();
const cors = require("cors");//use for run data on a port
const express= require("express");
const authRoute = require ("./router/auth-router");
const contactRoute = require ("./router/contact-router")
const serviceRoute = require ("./router/service-router")
const connectDb= require("./util/db");
const errorMiddleware = require("./middlewares/error-midleware");
const app= express();

//always use as a middleware cors on the front before write other data

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true, // Corrected the lowercase 'credentials'
};

app.use(cors(corsOptions));

 
connectDb().then(() =>{});

//for json code run use middleware that's why we call json().
app.use(express.json());

app.use('/api/auth', authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);
  


//            ***___________ port for data running ___________***
const PORT= procces.env.PORT || 5002;
app.listen(PORT, () =>{
  console.log(`Server is running at: ${PORT}`); 
})




