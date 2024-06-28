import Express from "express";
import { sendReview, viewReview, deleteReview } from "../controllers/review.js"

const router = Express.Router()


router.post("/send-review", sendReview)
router.get("/view-review", viewReview)
router.delete("/delete-review/:id", deleteReview)

export default router