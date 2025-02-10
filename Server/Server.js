import express from 'express'
const app = express()
import { bootstrap } from './src/bootstrapRoute.js'
import 'dotenv/config'
import { connectDb } from './data/dbConnection.js'
import cors from 'cors'
import { errorHandler } from './middleware/ErrorHandler.js'

connectDb()

app.use(cors());
const port = 3001
app.use(express.json())
bootstrap(app)
app.use('*',(req, res,next) => {
    res.status(404)
    next(new Error(`'${req.originalUrl}' Not Found`))
    })
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))