const tecnicasModel = require('../models/tecnicasEletrica')

const getAllTecnicas = async (require, response) => {
    try {
        const allTecnicas = await tecnicasModel.find({}, null);
        response.status(200).json(allTecnicas);
    } catch {
        response.status(500).json({ message: error.message});
    };
};

const getTecnicaById = async(require, response) => {
    try {
        const findTecnica = await tecnicasModel.findById(require.params.id);
        response.status(200).json(findTecnica);
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
}

const addNewTecnicas = async (require, response) => {
    try {
      const {nome, especialidade, municipio} = require.body;
      const newTecnica = new tecnicasModel({nome, especialidade, municipio});
      const savedTecnica = await newTecnica.save();
      response.status(200).json({ message: "Nova tecnica cadastrada com sucesso!", savedTecnica });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: error.message });
    };
  };

  const updateTecnicaById = async (require, response) => {
    try {
      const {
        nome, 
        especialidade, 
        municipio,
      } = require.body;
      const updateTecnica = await tecnicasModel.findByIdAndUpdate(
        require.params.id,
        {
        nome, 
        especialidade, 
        municipio,
        }
      );
      response.status(200).json(updateTecnica);
    } catch {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
  };

  const deleteTecnica = async (require, response) => {
    try {
      const { id } = require.params;
      const findTecnicas = await tecnicasModel.findByIdAndDelete(id);
  
      if (findTecnicas == null) {
        return response.status(404).json({ message: `Tecnica com id ${id} nao encontrada` })
      };
      response.status(200).json({ message: `Cadastro da tecnica com id ${id} foi deletado com sucesso` });
    } catch (error) {
      response.status(500).json({ message: error.message });
    };
  };

module.exports = {
  getAllTecnicas,
  getTecnicaById,
  addNewTecnicas,
  updateTecnicaById,
  deleteTecnica,
};