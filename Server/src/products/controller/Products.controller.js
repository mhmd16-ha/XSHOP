import ProductsModel from "../../../data/Model/Products.Model.js"
import { catchError } from "../../../middleware/CatchError.js"

const getProduct=catchError(async(req,res)=>{
    const doc= await ProductsModel.find()
    res.json({message:'success',doc})
})
const getProductById=catchError(async(req,res)=>{
    const doc= await ProductsModel.findById(req.params.id)
    res.json({message:'success',doc})
})
const getFlashSalesProduct=catchError(async(req,res)=>{
    const doc= await ProductsModel.find({flashSalse:true})
    res.json({message:'success',doc})
})
const AddProduct=catchError(async(req,res)=>{
    const doc= new ProductsModel(req.body)
    await doc.save()
    res.json({message:'success',doc})
})
export{
    getProduct,AddProduct,getFlashSalesProduct,getProductById
}