import express, { Router } from 'express'
import { AddProduct, getFlashSalesProduct, getProduct, getProductById } from '../controller/Products.controller.js';

const ProductsRouter=Router();
ProductsRouter.route('/').get(getProduct).post(AddProduct)
ProductsRouter.route('/flashsalse').get(getFlashSalesProduct)
ProductsRouter.route('/:id').get(getProductById)


export default ProductsRouter