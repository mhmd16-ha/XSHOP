import mongoose from 'mongoose'
const schema=mongoose.Schema({
    name:String,
    image:String,
   

},{
    timestamps:true,
    versionKey:false
})
const CategoryModel=mongoose.model("Category",schema)
export default CategoryModel