import express from 'express'
import { getAllProduct, getProductById, createProduct, updateProduct, removeProduct } from '../controllers/product'

const productRouter = express.Router()

productRouter.get('', getAllProduct)
productRouter.get('/:id', getProductById)
productRouter.post('', createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', removeProduct)

export default productRouter
