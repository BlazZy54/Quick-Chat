import express from "express"
import protectRoute from "../middlewares/protectRoute.js"
import { getUsersforSidebar } from "../controllers/usercontroller.js"

const router = express.Router()

router.get('/getUsersforSidebar', protectRoute, getUsersforSidebar)


export default router