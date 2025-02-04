import mongoose from "mongoose";

const VocabSchema = new mongoose.Schema({
    character: {
    type: String,
    required: true,
    unique: true,
  },
    pinyin: {
        type: String,
        required: true,
    },
  meaning: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: false,
  },
  level: {
    type: String,
    enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
    default: "A1",
  },
});

const Vocab = mongoose.model("Vocab", VocabSchema, "Vocab");
// mongo db automatically pluralizes the collection name
// third parameter sets the collection name to "Vocab"

export default Vocab;
