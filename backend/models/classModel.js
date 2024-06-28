import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        teacher: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        ageFrom: {
            type: Number,
            required: true
        },
        ageTo: {
            type: Number,
            required: true
        },
        timeFrom: {
            type: Number,
            required: true
        },
        timeTo: {
            type: Number,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        image: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    }
)

export const classes = mongoose.model("class", classSchema)