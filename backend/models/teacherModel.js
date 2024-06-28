import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "please, enter your name"],
        minLength: [3, "name cannot be this short"],
        maxLength: [20, "name cannot be this long"]
    },
    lastName: {
        type: String,
        required: [true, "please, enter your name"],
        minLength: [3, "name cannot be this short"],
        maxLength: [20, "name cannot be this long"]
    },
    profession: {
        type: String,
        required: [true, "please, enter your profession"],
        minLength: [3, "name cannot be this short"],
        maxLength: [20, "name cannot be this long"]
    },
    prof: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }]
})

export const teacher = mongoose.model("teacher", teacherSchema)