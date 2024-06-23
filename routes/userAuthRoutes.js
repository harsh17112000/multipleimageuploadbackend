const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userControllers");
const userUpload = require("../multerConfig/userConfig");

// user routes
router.post("/register",userUpload.array("userimg"),userController.ImageUpload);
router.get("/getUser",userController.getUserdata);

module.exports = router;