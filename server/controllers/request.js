import HelloModal from "../models/request.js";
//import mongoose from "mongoose";

export const createHello = async (req, res) => {
  const hello = req.body;
  const newHello = new HelloModal({
    ...hello,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newHello.save();
    res.status(201).json(newHello);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getHellos = async (req, res) => {
  try {
    const hellos = await HelloModal.find();
    res.status(200).json(hellos);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getHello = async (req, res) => {
  const { id } = req.params;
  try {
    const hello = await HelloModal.findById(id);
    res.status(200).json(hello);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
 


