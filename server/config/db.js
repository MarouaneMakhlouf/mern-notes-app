import dotenv from "dotenv";
dotenv.config({path:"./config/config.env"});
import mongoose from 'mongoose';
const password = process.env.PASSWORD;
const username = 'marwanany';


const dbUrl = `mongodb+srv://${username}:${password}@cluster0.8yrurck.mongodb.net`;

export const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options if needed
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};
