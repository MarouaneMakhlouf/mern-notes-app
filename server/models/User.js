import { Schema, model} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

export default model("User", UserSchema);