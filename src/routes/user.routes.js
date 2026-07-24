import  { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"

const router = Router()

// router.post("/register", registerUser)  // It's simple and is commonly used when a route has only one HTTP method.
router.route("/register").post(registerUser)

export default router