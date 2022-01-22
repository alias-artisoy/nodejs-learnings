import mongoose, { Schema } from "mongoose";

export const Item = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    name: String,
    price: Number,
    description: String,
    image: String
});

const itemSchema = mongoose.model("items", Item);

export default itemSchema;