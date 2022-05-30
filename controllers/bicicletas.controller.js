const db = require("../models");
const Bicicletas = db.bicicletas;

exports.create = (req, res) => {
    const bicicletas = new Bicicletas({
      ubicacion: req.body.ubicacion,
      description: req.body.description,
      disponible: req.body.disponible ? req.body.disponible : false,
      fechaDisponibilidad: req.body.fechaDisponibilidad,
    });
    bicicletas
      .save(bicicletas)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
  
exports.findAll = (req, res) => {
    const ubicacion = req.query.ubicacion;
    var condition = ubicacion ? { ubicacion: { $regex: new RegExp(ubicacion), $options: "i" } } : {};
    Bicicletas.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bicicletas."
        });
      });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Bicicletas.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found bicicletas with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving bicicletas with id=" + id });
      });
}; 