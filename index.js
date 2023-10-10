// npm packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import classmatesRoute from "./routes/classmate.js";

// Create an express application
const app = express();
app.use(cors())
//configure environment variables
dotenv.config();

// Connection to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//middleware
app.use(express.json());

// Routes
app.use("/classmate", classmatesRoute);

// Port connection
app.listen(3001, () => console.log('server started'));






