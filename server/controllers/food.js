import FoodModal from "../models/food.js";
//import mongoose from "mongoose";

export const createFood = async (req, res) => {
  const food = req.body;
  const newFood = new FoodModal({
    ...food,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  } 
}; 

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModal.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getFood = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModal.findById(id);
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// export const getToursByUser = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ message: "User doesn't exist" });
//   }
//   const userTours = await FoodModal.find({ creator: id });
//   res.status(200).json(userTours);
// };

