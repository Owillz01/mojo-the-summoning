const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const {db} = require('../db/config')
const { User, Attack, Card, Deck } = require("./index");
const { seedAttacks, seedCards, seedDecks, seedUsers } = require("./test_data");

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe("Deck", () => {
  it("has an id", async () => {
    deck = await Deck.create({ name: "gandalf", xp:222 });
    expect(deck).toHaveProperty("id");
  });

  test("Deck can have many Cards", async () => {
    let card = await Card.bulkCreate(seedCards);
    let deck = await Deck.create(seedDecks[0]);
    await deck.setCards(card);
    const deckCards = await deck.getCards();
    expect(deckCards.length).toBe(5);
  });

  test("Deck can eager load Cards", async () => {
    let card = await Card.bulkCreate(seedCards);
    let deck = await Deck.create(seedDecks[0]);
    await deck.setCards(card);
    const deckWithCards = await Deck.findOne({
      where: { name: "snake pit" },
      include: { model: Card },
    });
    expect(deckWithCards).toHaveProperty("Cards");
  });


  /**
   * Create more tests
   */
});
