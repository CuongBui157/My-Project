import express from 'express'
import { getAllBooking, getBookingById, createBooking, updateBooking, removeBooking } from '../controllers/booking'

const bookingRouter = express.Router()

bookingRouter.get('', getAllBooking)
bookingRouter.get('/:id', getBookingById)
bookingRouter.post('', createBooking)
bookingRouter.put('/:id', updateBooking)
bookingRouter.delete('/:id', removeBooking)

export default bookingRouter
