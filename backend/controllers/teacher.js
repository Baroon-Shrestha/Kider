import { teacher } from "../models/teacherModel.js";
import cloudinary from 'cloudinary'

export const newTeacher = async (req, res) => {
    const { firstName, lastName, profession } = req.body

    if (!firstName || !lastName || !profession) return res.send("please fill all the data")

    // const { prof } = req.files

    let publicId = ''
    let url = ''
    let cloudinaryResponse;

    if (req.files && req.files.prof) {
        const { prof } = req.files;
        const imgExt = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

        if (!imgExt.includes(prof.mimetype)) {
            return errorHanlder(createError("Please upload the image in PNG, JPEG, JPG, or WEBP format"), req, res);
        }

        cloudinaryResponse = await cloudinary.uploader.upload(prof.tempFilePath);
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.log("Cloudinary error:", cloudinaryResponse.error || "Unknown Cloudinary error");
            return errorHanlder(createError("Failed to upload"), req, res);
        }
        publicId = cloudinaryResponse.public_id
        url = cloudinaryResponse.secure_url
    }
    else {
        publicId = "gfpbmxq7uasbahzowi0t"
        url = "https://res.cloudinary.com/dbwu2fxcs/image/upload/v1712850394/gfpbmxq7uasbahzowi0t.jpg"
    }

    const newTeach = await teacher.create({
        firstName, lastName, profession, prof: {
            public_id: publicId,
            url: url
        }
    })

    res.send({
        success: true,
        message: "teacher added successfully",
        newTeach
    })
}

export const viewTeacher = async (req, res) => {

    const view = await teacher.find()

    res.send({
        success: true,
        view
    })
}

export const deleteTeacher = async (req, res) => {
    const { id } = req.params

    if (!id) return res.send("teacher not found")

    const deleteTeach = await teacher.findById(id)

    await teacher.deleteOne({ _id: id })

    res.send({
        success: true,
        message: "deleted successfully"
    })
}

export const updateTeach = async (req, res) => {
    const { id } = req.params

    if (!id) return res.send("Teacher of this id not found")

    const { firstName, lastName, profession } = req.body

    let updatedData = { firstName, lastName, profession }

    if (req.files && req.files.prof) {
        const { prof } = req.files;
        const ext = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

        if (!ext.includes(prof.mimetype)) {
            return res.send("Please upload the image in PNG, JPEG, JPG, or WEBP format");
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(prof.tempFilePath);
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.log("Cloudinary error:", cloudinaryResponse.error || "Unknown Cloudinary error");
            return res.send("Failed to upload");
        }

        updatedData.prof = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        };
    }

    const updatedTeacher = await teacher.findByIdAndUpdate(id, updatedData, { new: true });

    res.send({
        success: true,
        message: "Teacher updated successfully",
        updatedTeacher
    });
}