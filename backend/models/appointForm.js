import mongoose from 'mongoose';

const appointForm = new mongoose.Schema({
    guardianEmail: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    childName: {
        type: String,
        required: true
    },
    childAge: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

export const appointData = mongoose.model('Appointment', appointForm);

