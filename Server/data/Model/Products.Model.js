import mongoose from 'mongoose'
const schema=mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    images:[String],
    category:mongoose.Types.ObjectId,
    flashSalse:{
        type:Boolean,
        default:false,
    }

},{
    timestamps:true,
    versionKey:false
})
const ProductsModel=mongoose.model("Product",schema)
export default ProductsModel