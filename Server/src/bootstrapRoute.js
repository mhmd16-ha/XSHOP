import CategoriesRouter from "./Categories/routes/Categories.Route.js"
import ProductsRouter from "./products/routes/Products.Route.js"

export const bootstrap=(app)=>{


    app.use('/api/v1/products',ProductsRouter)
    app.use('/api/v1/categories',CategoriesRouter)
}