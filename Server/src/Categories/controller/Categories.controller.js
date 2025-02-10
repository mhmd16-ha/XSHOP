import CategoryModel from "../../../data/Model/Categories.Model.js"
import {catchError} from "../../../middleware/CatchError.js"

const getCategory=catchError(async(req,res)=>{
    const doc= await CategoryModel.find()
    res.json({message:'success',doc})
})
const AddCategory=catchError(async(req,res)=>{
    const doc= new CategoryModel(req.body)
    await doc.save()
    res.json({message:'success',doc})
})
export{
    getCategory,AddCategory
}