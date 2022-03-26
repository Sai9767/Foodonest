import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  title: String,
  quantity: String,
  Address: String,
  name: String,
  creator: String, 
  tags: [String], 
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const FoodModal = mongoose.model("Food", foodSchema);

export default FoodModal;