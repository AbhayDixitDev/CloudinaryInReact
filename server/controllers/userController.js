const StuModel= require("../models/studentModel");
const dataSave=async(req, res)=>{
   const {rollno, name, city, images}= req.body;
   const Data=await  StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    images:images
   })
   res.send(Data);
}

const dataDisplay=async(req, res)=>{
    const Data= await StuModel.find();
    res.send(Data);
}
module.exports={
    dataSave,
    dataDisplay
}