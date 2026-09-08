const express = require("express")

const router = express.Router()

const checkin = require("../middleware/checkinMiddleware")

const {getProfile,createUser} = require("../controllers/userControllers")

router.get("/user",getProfile)
router.post("/user",createUser)


module.exports= router;
