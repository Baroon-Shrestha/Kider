import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        minLength: [10, "cannot be this short"]
    },
    createdBy: {
        type: String,
        reqiured: true
    }
})

export const review = new mongoose.model("review", reviewSchema)