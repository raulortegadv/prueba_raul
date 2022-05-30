module.exports = mongoose => {
    const Bicicletas = mongoose.model(
      "bicicletas",
      mongoose.Schema(
        {
          ubicacion: String,
          description: String,
          disponible: Boolean,
          fechaDisponibilidad: String
        },
        { timestamps: true }
      )
    );
    return Bicicletas;
  };