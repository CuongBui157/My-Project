import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import bookingRouter from './routers/booking'
import cartRouter from './routers/cart'
import classifyRouter from './routers/classify'
import commentRouter from './routers/comment'
import productRouter from './routers/product'
import userRouter from './routers/users'

const app = express()
const port = 8080

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/myproject")
    .then(() => console.log("Connect to DB successfully"))

// Router
app.use(cors())
app.use('/booking', bookingRouter)
app.use('/cart', cartRouter)
app.use('/classify', classifyRouter)
app.use('/comment', commentRouter)
app.use('/product', productRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})
