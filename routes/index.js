const express=require("express")
const router=express.Router();
const userControler=require("../controllers/userControllers");
//endpoint
router.get|('/users',userControler.getAllUsers);
module.exports = router;