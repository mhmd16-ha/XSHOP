import express, { Router } from 'express'
import { AddCategory, getCategory } from '../controller/Categories.controller.js';

const CategoriesRouter=Router();
CategoriesRouter.route('/').get(getCategory).post(AddCategory)


export default CategoriesRouter