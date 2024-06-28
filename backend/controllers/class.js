import { classes } from "../models/classModel.js";
import cloudinary from 'cloudinary'
import moment from "moment"


export const addClass = async (req, res) => {
    const { title, price, ageFrom, ageTo, timeFrom, timeTo, teacher, capacity } = req.body

    if (!title || !teacher || !price || !ageFrom || !ageTo || !timeFrom || !timeTo || !capacity) return res.send("please fill all the data")

    const { image } = req.files

    if (!req.files || !req.files.image) {
        return res.send("Please upload image");
    }

    const ext = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (!ext.includes(image.mimetype)) return res.send("Please upload the image in PNG, JPEG, JPG, or WEBP format")

    const timeFromMoment = moment(timeFrom, "HH:mm");
    const timeToMoment = moment(timeTo, "HH:mm");


    if (!timeToMoment.isAfter(timeFromMoment) || timeToMoment.diff(timeFromMoment, 'hours') > 24) {
        return res.send("Invalid time: timeTo should be after timeFrom and within 24 hours");
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(image.tempFilePath);
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.log("Cloudinary error:", cloudinaryResponse.error || "Unknown Cloudinary error");
        return res.send("Failed to upload")
    }

    const addClass = await classes.create({
        title, teacher, price, ageFrom, ageTo, timeFrom, timeTo, capacity, image: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        }
    })

    res.send({
        success: true,
        message: "class added successfully",
        addClass
    })
}

export const viewClass = async (req, res) => {
    const view = await classes.find()

    res.send({
        success: true,
        view
    })
}

export const deleteClass = async (req, res) => {
    const { id } = req.params

    if (!id) return res.send("class not found")

    const deleteClass = await classes.findById(id)

    await classes.deleteOne({ _id: id })

    res.send({
        success: true,
        message: "deleted successfully"
    })
}