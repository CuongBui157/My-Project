import Booking from "../models/booking";
import Joi from 'joi'

const bookingSchema = Joi.object({
    listProduct: Joi.array().items({
        id_product: Joi.string().required()
    }).required(),
    id_user: Joi.string().required(),
    status_order: Joi.string().required()
})

export const getAllBooking = async (req, res) => {
    try {
        const data = await Booking.find()
        res.send({
            message: "Get all booking successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getBookingById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Booking.findById(id)
        res.send({
            message: "Get one booking successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const createBooking = async (req, res) => {
    try {
        const body = req.body
        const { error } = bookingSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Booking.create(body)
            res.send({
                message: "Create booking succesfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const updateBooking = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = bookingSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Booking.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update booking succesfully",
                    data: data
                })
            } else {
                res.send({
                    message: "Booking is not existed",
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

export const removeBooking = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Booking.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete booking successfully"
            })
        } else {
            res.status(400).send({
                message: "Booking is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
