import Classify from '../models/classify'
import Joi from 'joi'

const classifySchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required()
})

export const getAllClassify = async (req, res) => {
    try {
        const data = await Classify.find()
        res.send({
            message: "Get all classify successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getClassifyById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Classify.findById(id)
        res.send({
            message: "Get one classify successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const createClassify = async (req, res) => {
    try {
        const body = req.body
        const { error } = classifySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Classify.create(body)
            res.send({
                message: "Create classify succesfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const updateClassify = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = classifySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Classify.findByIdAndUpdate(id,body)
            if (data) {
                res.send({
                    message: "Update classify succesfully",
                    data: data
                })
            } else {
                res.send({
                    message: "Classify is not existed",
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

export const removeClassify = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Classify.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete classify successfully"
            })
        } else {
            res.status(400).send({
                message: "Classify is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
