import bodyParser from "body-parser";
import Express from "express";
import dotenv from "dotenv";
import cors from "cors"
import fileUpload from "express-fileupload";
import { connectDb } from "./database/database.js";

import teacherRoute from "./routes/teacherRoute.js"
import classRoute from "./routes/classRoute.js"
import appointRoute from "./routes/appoint.js"
import reviewRoute from "./routes/reviewRoute.js"


export const app = Express()

app.use(cors())

app.use(bodyParser.json())

dotenv.config({ path: "./.env" })

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/"
}))

app.use("/kider", teacherRoute)
app.use("/kider", classRoute)
app.use("/kider", appointRoute)
app.use("/kider", reviewRoute)

connectDb()