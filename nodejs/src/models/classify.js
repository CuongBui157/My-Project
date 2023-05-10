import mongoose from "mongoose";
const { Schema } = mongoose

const Classify = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    }
})

export default mongoose.model("Classify", Classify)
