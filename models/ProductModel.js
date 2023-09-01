const mongoose=require("mongoose")
const prodschema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    
})

const ProductModel=mongoose.model("Product",prodschema)

module.exports={ProductModel}