import mongoose from "mongoose";
const { Schema } = mongoose

const Comment = new Schema({
    id_product: {
        type: String,
        require: true
    },
    id_user: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
})

export default mongoose.model("Comment", Comment)
