import { Schema, model} from "mongoose";

const NoteSechema = new Schema({
    userId: {
        type: String,
        required: [true, "Please provide a user id"],
    },
    title: {
        type: String,
        required: [true, "Please provide = title"],
        maxlength: [40, "Title cannot be more than 40 charcters"],
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, "oescription cannot be more than 200 characters"],
    },
    color: {
        type: String,
        default: "#ffffff",
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

export default model("Note",NoteSechema);