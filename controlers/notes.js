import Note from "../models/Notes.js"

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            success: true,
            data: notes,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
        })
    }
}
export const getSingleNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!Note) {
            return res.status(400).json({
                success: false,
                error: 'No note found',
            })
        }
        res.status(200).json({
            success: true,
            data: note,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        })
    }
}
export const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json({
            success: true,
            data: note,
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error.message,
        });
    }
}
export const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!Note) {
            return res.status(400).json({
                success: false,
                error: 'No note found',
            })
        }
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(201).json({
            success: true,
            data: updatedNote,
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error.message,
        });
    }
}
export const deleteNote = async (req, res) => {
    try {
      const noteId = req.params.id;
      const note = await Note.findById(noteId);
      if (!note) {
        return res.status(404).json({
          success: false,
          error: 'Note not found',
        });
      }
      // Delete the note
      await note.remove();
      // Send success response
      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (error) {
      console.error('Error deleting note:', error.message);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };