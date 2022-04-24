const express=require('express');
const router=express.Router();

const News=require("../models/model");


router.route("/create").post((req,res)=>{
    const title=req.body.tittle;
    const content=req.body.content;
    const newStr=new News({title,content});
    newStr.save();
})

module.exports=router




