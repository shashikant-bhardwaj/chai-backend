import  { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"
import { upload } from '../middlewares/multer.middleware.js'
const router = Router()

// router.post("/register", registerUser)  // It's simple and is commonly used when a route has only one HTTP method.
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        }, 
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser)

export default router