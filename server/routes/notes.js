import express from "express";
import {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controlers/notes.js";
const router = express.Router();

import { requireAth } from "../middlewares/requireAuth.js";
router.use(requireAth);

// GET request to fetch all notes and POST request to create a new note
router.route("/").get(getNotes).post(createNote);

// GET request to fetch a single note and PUT request to update and DELETE request to delete a note by ID
router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

export default router;
