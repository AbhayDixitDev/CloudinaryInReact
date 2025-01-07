const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DB_NAME).then(()=>{
  console.log("DB connected!!!");
})

app.use("/mycloudenary", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})