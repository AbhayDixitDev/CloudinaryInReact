const express= require("express");
const route= express.Router();
const userController= require("../controllers/userController");

route.post("/datasave", userController.dataSave);
route.get("/datadisplay", userController.dataDisplay);




module.exports= route;