const { db, DataTypes, Model } = require('../db/config')

class Card extends Model{}

Card.init(
  {
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Card",
  }
);

module.exports = Card