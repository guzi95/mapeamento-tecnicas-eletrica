const mongoose = require("mongoose");

const TecnicaSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    nome: {
      type: String,
      required: true,
      unique: true,
    },
    especialidade: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Model = mongoose.model("Tecnica", TecnicaSchema);


module.exports = Model;