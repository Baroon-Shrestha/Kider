import mongoose from "mongoose";

export const connectDb = () => {
    const uri = process.env.MONGODB_URI

    mongoose.connect(uri).then(() => {
        console.log("connected to db")
    }).catch((err) => {
        console.log(err)
    })
}