import express from "express";
import {
    register,
    login,
} from "../controlers/users.js";
const router = express.Router();

// GET request to fetch all notes and POST request to create a new note
router.route("/register").post(register)
router.route("/login").post(login);


export default router;
