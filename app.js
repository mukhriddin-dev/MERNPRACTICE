const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");


app.use(cors());
app.use(express.json())





mongoose.connect("mongodb://localhost/newsDb");

const connection=mongoose.connection;

app.use("/", require("./routes/routes"))

connection.on('connected',()=> console.log("DataBase connected"));









app.listen(5000, ()=>console.log('Server ishlayapti . . .'));


