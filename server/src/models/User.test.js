const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Attack, Card, Deck } = require("./index");
const {db} = require('../db/config')

const { seedAttacks, seedCards, seedDecks, seedUsers } = require('./test_data')
// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    user = await User.create({ username: 'gandalf' })
    expect(user).toHaveProperty("id");
    expect(user.username).toBe("gandalf");
  })

 test("User can have single Deck", async () => {
    let user = await User.create(seedUsers[0]);
    let deck = await Deck.create(seedDecks[0]);
    await user.setDeck(deck);
    const userDeck = await user.getDeck();
    expect(userDeck).toBeInstanceOf(Deck);
  });

   test("Deck can have only one User", async () => {
     let user1 = await User.create(seedUsers[0]);
     let user2 = await User.create(seedUsers[1]);
     let deck = await Deck.create(seedDecks[0]);
     await user1.setDeck(deck);
     await user2.setDeck(deck);
     const user1Deck = await user1.getDeck();
     const user2Deck = await user2.getDeck();
     expect(user1Deck).toBeNull();
     expect(user2Deck).toBeInstanceOf(Deck);
   });

  test("User can eager load Deck", async () => {
    let user = await User.create(seedUsers[0]);
    let deck = await Deck.create(seedDecks[0]);
    await user.setDeck(deck);
    const userWithDeck = await User.findOne({
      where: { username: "v1per" }, include: { model: Deck}
    } );
    expect(userWithDeck).toHaveProperty("Deck");
  });

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
