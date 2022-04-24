const mongoose=require("mongoose");

const newSchema={
    title:String,
    connnect:String,
};


 const News=mongoose.model("News", newSchema);

 module.exports=News;