import Product from '../models/product'
import Joi from 'joi'

const Size = Joi.object({
    number_size: Joi.number().required(),
    quantity: Joi.number().required()
})

const productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.object({
        baseUrl: Joi.string().required(),
        illustrating: Joi.array().items({
            smallUrl: Joi.string()
        })
    }),
    price: Joi.number(),
    origin_price: Joi.number().required(),
    brand: Joi.string().required(),
    desciption: Joi.string().required(),
    size: Joi.array().items(Size),
    quantity: Joi.number().required(),
    status: Joi.string().required()
})

export const getAllProduct = async (req, res) => {
    try {
        const data = await Product.find()
        res.send({
            message: "Get Products successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findById(id)
        res.send({
            message: "Get product successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const body = req.body
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Product.create(body)
            res.send({
                message: "Create product successfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Product.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update product successfully",
                    data: data
                })
            } else {
                res.status(400).send({
                    message: "Product is not existed"
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const removeProduct = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete Product successfully",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Product is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
