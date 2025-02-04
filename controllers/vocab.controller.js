import mongoose from "mongoose";
import Vocab from "../models/vocab.model.js";

export const getAllVocabs = async (req, res) => {
  try {
    const vocabs = await Vocab.find();
    return res.status(200).json(vocabs);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getOneWord = async (req, res) => {
  try {
    console.log("Word fetching...");
    const word = await Vocab.findOne();
    const count = await Vocab.countDocuments();
    console.log("Total documents:", count);

    
    console.log("Word fetched", word);
    return res.status(200).json({success: true, data: word});
  } catch (error) {
    console.log("Error fetching word", error);
    return res.status(404).json({ message: error.message });
  }
};

export const createVocab = async (req, res) => {
  const vocab = req.body;
  const newVocab = new Vocab(vocab);
  try {
    await newVocab.save();
    return res.status(201).json(newVocab);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const updateVocab = async (req, res) => {
  const { id: _id } = req.params;
  const vocab = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No vocab with that id");

  const updatedVocab = await Vocab.findByIdAndUpdate(
    _id,
    { ...vocab, _id },
    { new: true }
  );
  return res.json(updatedVocab);
};
