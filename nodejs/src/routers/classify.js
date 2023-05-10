import express from 'express'
import { getAllClassify, getClassifyById, createClassify, updateClassify, removeClassify } from '../controllers/classify'

const classifyRouter = express.Router()

classifyRouter.get('', getAllClassify)
classifyRouter.get('/:id', getClassifyById)
classifyRouter.post('', createClassify)
classifyRouter.put('/:id', updateClassify)
classifyRouter.delete('/:id', removeClassify)

export default classifyRouter
