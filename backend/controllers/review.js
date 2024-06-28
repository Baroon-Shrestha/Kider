import { review } from "../models/reviewModel.js";

export const sendReview = async (req, res) => {
    const { description, createdBy } = req.body

    if (!description || !createdBy) return res.send("please fill all the data")

    try {
        const addReview = await review.create({ description, createdBy })

        res.send({
            success: true,
            message: "Review added successfully",
            addReview
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const viewReview = async (req, res) => {
    const view = await review.find()

    res.send({
        success: true,
        view
    })
}

export const deleteReview = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).send("Review ID not provided")

    try {
        const reviewToDelete = await review.findById(id)

        if (!reviewToDelete) {
            return res.status(404).send({
                success: false,
                message: "Review not found"
            })
        }

        await review.deleteOne({ _id: id })

        res.send({
            success: true,
            message: "Review deleted successfully"
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send({
            success: false,
            message: "An error occurred while deleting the review"
        })
    }
}
