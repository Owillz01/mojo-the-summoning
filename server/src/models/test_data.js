const seedAttacks = [
  { title: "Charge", mojoCost: 10, staminaCost: 15 },
  { title: "Thunderbolt", mojoCost: 20, staminaCost: 10 },
  { title: "Piledriver", mojoCost: 25, staminaCost: 20 },
  { title: "Fireball", mojoCost: 30, staminaCost: 25 },
  { title: "Ice Spear", mojoCost: 15, staminaCost: 20 },
  { title: "Heal", mojoCost: 10, staminaCost: 5 },
  { title: "Poison Strike", mojoCost: 35, staminaCost: 30 },
  { title: "Shadow Cloak", mojoCost: 40, staminaCost: 10 },
  { title: "Earthquake", mojoCost: 50, staminaCost: 35 },
  { title: "Wind Slash", mojoCost: 25, staminaCost: 15 },
];

const seedUsers = [
  { username: "v1per" },
  { username: "trinity" },
  { username: "mr_spoon" },
];

const seedCards = [
  {
    name: "Arcturus Spellweaver",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/arcturus-spellweaver.jpg",
  },
  {
    name: "Nimue Mistral",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/nimue-mistral.jpg",
  },
  {
    name: "Theron Thunderstrike",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/theron-thunderstrike.jpg",
  },
  {
    name: "Lirien Moonshadow",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/lirien-moonshadow.jpg",
  },
  {
    name: "Alaric Flamecaller",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/alaric-flamecaller.jpg",
  },
];

const seedDecks = [{name: "snake pit", xp:33}, {name:"the matrix", xp:40}, {name:"Doom Burger", xp:54}];



module.exports = { seedAttacks, seedCards, seedDecks, seedUsers };
