const express = require("express")

const router = express.Router()

const checkin = require("../middleware/checkinMiddleware")

const {getProfile,createUser} = require("../controllers/userControllers")

router.get("/user",checkin,getProfile)
router.post("/user",checkin,createUser)


module.exports= router;