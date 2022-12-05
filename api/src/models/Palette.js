const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo Palette
  sequelize.define('palette', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.JSON), 
      allowNull: false,
    }
  }, {
    timestamps: false
  });
};