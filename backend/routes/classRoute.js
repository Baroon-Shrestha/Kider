import Express from "express";
import { addClass, viewClass, deleteClass } from "../controllers/class.js";

const router = Express.Router()

router.post("/addclass", addClass)
router.get("/viewclass", viewClass)
router.delete("/deleteclass/:id", deleteClass)

export default router