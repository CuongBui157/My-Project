import mongoose from "mongoose";
const { Schema } = mongoose

const Image = new Schema({
    baseUrl: {
        type: String,
        require: true
    },
    illustrating: {
        type: [
            {
                smallUrl: String
            }
        ]
    }
})

const Size = new Schema({
    number_size: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

const Product = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: Image,
        require: true
    },
    price: Number,
    origin_price: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    desciption: {
        type: String,
        require: true
    },
    size: {
        type: [Size],
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})

export default mongoose.model("Product", Product)
