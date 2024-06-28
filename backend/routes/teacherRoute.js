import Express from "express";
import { newTeacher, viewTeacher, deleteTeacher, updateTeach } from "../controllers/teacher.js"

const router = Express.Router()

router.post("/add", newTeacher)
router.get("/view", viewTeacher)
router.delete("/delete/:id", deleteTeacher)
router.put("/update/:id", updateTeach)

export default router