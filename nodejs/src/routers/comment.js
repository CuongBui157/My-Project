import express from 'express'
import { getAllComment, getCommentById, createComment, updateComment, removeComment } from '../controllers/comment'

const commentRouter = express.Router()

commentRouter.get('', getAllComment)
commentRouter.get('/:id', getCommentById)
commentRouter.post('', createComment)
commentRouter.put('/:id', updateComment)
commentRouter.delete('/:id', removeComment)

export default commentRouter
