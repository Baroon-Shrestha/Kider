import Express from "express";
import { submit, submitContact } from "../controllers/appoint.js"

const router = Express.Router()

router.post("/send-mail", submit)
router.post("/contact", submitContact)

export default router