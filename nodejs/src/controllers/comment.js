import Comment from '../models/comment'
import Joi from 'joi'

const commentSchema = Joi.object({
    id_product: Joi.string().required(),
    id_user: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.date().required()
})

export const getAllComment = async (req, res) => {
    try {
        const data = await Comment.find()
        res.send({
            message: "Get all Comment successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getCommentById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Comment.findById(id)
        res.send({
            message: "Get one Comment successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const createComment = async (req, res) => {
    try {
        const body = req.body
        const { error } = commentSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Comment.create(body)
            res.send({
                message: "Create Comment succesfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const updateComment = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = commentSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Comment.findByIdAndUpdate(id,body)
            if (data) {
                res.send({
                    message: "Update Comment succesfully",
                    data: data
                })
            } else {
                res.send({
                    message: "Comment is not existed",
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

export const removeComment = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Comment.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete Comment successfully"
            })
        } else {
            res.status(400).send({
                message: "Comment is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
