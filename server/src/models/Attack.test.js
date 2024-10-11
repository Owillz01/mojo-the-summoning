const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const  Attack  = require('./Attack')
const {db} = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe("Attack", () => {
  it("has an id", async () => {
    attack = await Attack.create({ title: "test title", mojoCost:10, staminaCost:20 });
    expect(attack).toHaveProperty("id");
  });

  /**
   * Create more tests
   */
});
