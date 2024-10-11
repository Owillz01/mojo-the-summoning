const { db, DataTypes, Model } = require('../db/config')

class Attack extends Model{}

Attack.init(
  {
    // id: DataTypes.INTEGER,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
    title: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Attack",
  }
);

module.exports = Attack