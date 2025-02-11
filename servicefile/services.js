const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const Service = require("./services-model");

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect("mongodb+srv://Alishba:SSJ6V6x1bjHG8hej@cluster0.jpqwe.mongodb.net/mern-admin", {
  useNewUrlParser: true,
}).then(() => {
  console.log('MongoDB connected successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware for JSON and CORS
app.use(express.json());
app.use(cors());

// API Route to Insert Services
app.post("/add-services", async (req, res) => {
  try {
    const services = [
      {
        service: "Full Stack Development with MERN Stack",
        description: "Full-stack web development service with React and Node.js,MongoDB",
        price: "500 USD",
        provider: "Alishba Shahzad",
      },
      {
        service: "Graphic Design",
        description: "Custom logo and UI/UX design service",
        price: "300 USD",
        provider: "Alishba Shahzad",
      },
      {
        service: "SEO Optimization",
        description: "Boost website ranking with SEO best practices",
        price: "200 USD",
        provider: "Alishba Shahzad",
      },
      {
        service: "UI/UX Design",
        description: "Create stunning and user-friendly UI/UX designs",
        price: "300 USD",
        provider: "Alishba Shahzad",
      },{
        service: "Content Writing",
        description: "High-quality, SEO-friendly content creation",
        price: "150 USD",
        provider: "Alishba Shahzad",
      },
    ];

    await Service.insertMany(services);
    res.json({ message: "Services added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error adding services", details: error });
  }
});

// API Route to Get Services
app.get("/services", async (req, res) => {
  try {
    const services = await Service.find(); // MongoDB se services fetch karo
    res.json(services); // Services ko frontend ko bhej do
  } catch (error) {
    res.status(500).json({ error: "Error fetching services", details: error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
