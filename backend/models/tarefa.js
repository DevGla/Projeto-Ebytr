const Tarefa = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define("Tarefa", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  });

  return Tarefa;
};

module.exports = Tarefa;