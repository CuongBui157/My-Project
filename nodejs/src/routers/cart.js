import express from 'express'
import { getAllCart, getCartById, createCart, updateCart, removeCart } from '../controllers/cart'

const cartRouter = express.Router()

cartRouter.get('', getAllCart)
cartRouter.get('/:id', getCartById)
cartRouter.post('', createCart)
cartRouter.put('/:id', updateCart)
cartRouter.delete('/:id', removeCart)

export default cartRouter
