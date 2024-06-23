// import express and config
import express from "express";
const app = express();
app.use(express.json());

// import dotenv
import dotenv from "dotenv";
dotenv.config({path:"./config/config.env"});

// import morgan
import morgan from "morgan";
app.use(morgan("dev"));

// import connect Db
import { connectDb } from './config/db.js';

// import router
import notes from './routes/notes.js';
import users from './routes/users.js';

// routes
app.use("/api/v1/notes", notes);
app.use("/api/v1/users", users);

// start the server
app.listen(3001, async () => {
    
        await connectDb();
        console.log("Server is running at http://localhost:3001/");
        console.log("db is connected")
    
});
