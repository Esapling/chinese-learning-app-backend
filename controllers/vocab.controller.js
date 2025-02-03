import mongoose from "mongoose";
import Vocab from "../models/vocab.model.js";

export const getAllVocabs = async (req, res) => {
    try {
        const vocabs = await Vocab.find();
        res.status(200).json(vocabs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createVocab = async (req, res) => {
    const vocab = req.body;
    const newVocab = new Vocab(vocab);
    try {
        await newVocab.save();
        res.status(201).json(newVocab);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateVocab = async (req, res) => {
    const { id: _id } = req.params;
    const vocab = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No vocab with that id");

    const updatedVocab = await Vocab.findByIdAndUpdate(_id, { ...vocab, _id }, { new: true });
    res.json(updatedVocab);
};