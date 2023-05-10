import mongoose from "mongoose";
const { Schema } = mongoose

const ListProduct = new Schema({
    id_product: {
        type: String,
        require: true
    },
})

const Cart = new Schema({
    listProduct: {
        type: [ListProduct],
        require: true
    },
    id_user: {
        type: String,
        require: true
    }
})

export default mongoose.model("Cart", Cart)
