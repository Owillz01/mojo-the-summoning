const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const {db} = require('../db/config')
const { User, Attack, Card, Deck } = require("./index");
const { seedAttacks, seedCards, seedDecks, seedUsers } = require("./test_data");


// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    card = await Card.create({ name: "gandalf", mojo:20, stamina:29, imgUrl:'hhh' });
    expect(card).toHaveProperty("id");
  })

  test("Cards can have many Attacks and Vice Versa", async () => {
    let cards = await Card.bulkCreate(seedCards);
    let attacks = await Attack.bulkCreate(seedAttacks);
    // cards.map(async (card) => {
    //   await card.setAttacks(attacks);
    // })
    await cards[0].setAttacks(attacks);
    await cards[1].setAttacks(attacks);
    const cardAttacks1 = await cards[0].getAttacks();
    const cardAttacks2 = await cards[1].getAttacks();
    expect(cardAttacks1.length).toBe(attacks.length);
    expect(cardAttacks2.length).toBe(attacks.length);
  });

  test("Cards can eager load Attacks", async () => {
    let cards = await Card.bulkCreate(seedCards);
    let attacks = await Attack.bulkCreate(seedAttacks);
    await cards[0].setAttacks(attacks);
    await cards[1].setAttacks(attacks);
    const cardsWithAttacks = await Card.findAll({ include: { model: Attack } });
    expect(cardsWithAttacks[0]).toHaveProperty("Attacks");
  });


  /**
   * Create more tests
   */
})
