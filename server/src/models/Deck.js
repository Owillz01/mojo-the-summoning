// create your User model here
const {db, Model, DataTypes} =  require('../db/config')

class Deck extends Model{}

Deck.init(
  {
    // id: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
    name: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Deck",
  }
);


module.exports = Deck;