import Cart from '../models/cart'
import Joi from 'joi'

const cartSchema = Joi.object({
    listProduct: Joi.array().items({
        id_product: Joi.string().required()
    }).required(),
    id_user: Joi.string().required()
})

export const getAllCart = async (req, res) => {
    try {
        const data = await Cart.find()
        res.send({
            message: "Get all cart successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getCartById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Cart.findById(id)
        res.send({
            message: "Get one cart successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const createCart = async (req, res) => {
    try {
        const body = req.body
        const { error } = cartSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Cart.create(body)
            res.send({
                message: "Create cart succesfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const updateCart = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = cartSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Cart.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update cart succesfully",
                    data: data
                })
            } else {
                res.send({
                    message: "Cart is not existed",
                    data: data
                })
            }

        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const removeCart = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Cart.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete cart successfully"
            })
        } else {
            res.status(400).send({
                message: "Cart is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
