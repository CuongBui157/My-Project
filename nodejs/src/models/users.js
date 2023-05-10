import mongoose from "mongoose";
const { Schema } = mongoose

const Users = new Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    account: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: String
})

export default mongoose.model("Users", Users)
