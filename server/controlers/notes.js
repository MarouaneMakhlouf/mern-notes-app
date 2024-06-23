import Note from "../models/Notes.js";

export const getNotes = async (req, res) => {
    const userId = req.userId;
    console.log(userId)
    try {
        const notes = await Note.find({ userId: userId });
        res.status(200).json({
            success: true,
            data: notes,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const getSingleNote = async (req, res) => {
    try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                error: "Invalid note id",
            });
        }

        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                success: false,
                error: 'No note found',
            });
        }
        res.status(200).json({
            success: true,
            data: note,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const createNote = async (req, res) => {

    const userId = req.userId;
    try {
        const note = await Note.create({
            ...req.body,
            userId: userId,
        });
        res.status(201).json({
            success: true,
            data: note,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                success: false,
                error: 'No note found',
            });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            success: true,
            data: updatedNote,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                success: false,
                error: 'Note not found',
            });
        }
        await Note.findByIdAndDelete(req.params.id);
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
