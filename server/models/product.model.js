const mongoose=require("mongoose")

const Product=new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    description:{type:String}
},{timestamps:true})

module.exports=mongoose.model("Products",Product)

