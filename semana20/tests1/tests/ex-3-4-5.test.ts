import {
  Casino,
  isPlayerAllowed,
  LOCATION,
  NATIONALITY,
  Player,
} from "../src/ex-3-e-4";

const casinoBR: Casino = {
  name: "Casino BR 1",
  location: LOCATION.BRAZIL,
};
const casinoEUA: Casino = {
  name: "Casino EUA 1",
  location: LOCATION.EUA,
};

const players1: Player[] = [
  { name: "playerA1", age: 20, nationality: NATIONALITY.BRAZILIAN },
];
const players2: Player[] = [
  { name: "playerB1", age: 40, nationality: NATIONALITY.AMERICAN },
];
const players3: Player[] = [
  { name: "playerC1", age: 19, nationality: NATIONALITY.AMERICAN },
  { name: "playerC2", age: 19, nationality: NATIONALITY.AMERICAN },
  { name: "playerC3", age: 19, nationality: NATIONALITY.BRAZILIAN },
  { name: "playerC4", age: 19, nationality: NATIONALITY.BRAZILIAN },
];
const players4: Player[] = [
  { name: "playerD1", age: 21, nationality: NATIONALITY.AMERICAN },
  { name: "playerD2", age: 21, nationality: NATIONALITY.AMERICAN },
  { name: "playerD3", age: 19, nationality: NATIONALITY.BRAZILIAN },
  { name: "playerD4", age: 19, nationality: NATIONALITY.BRAZILIAN },
];

describe("Test player age and country verifications", () => {
  test("One brazilian allowed", () => {
    const result = isPlayerAllowed(casinoBR, players1);
    expect(result.brazilians.allowed).toEqual([players1[0].name]);
  });

  test("One american allowed", () => {
    const result = isPlayerAllowed(casinoBR, players2);
    expect(result.americans.allowed).toEqual([players2[0].name]);
  });

  test("No one allowed", () => {
    const result = isPlayerAllowed(casinoEUA, players3);
    expect(result.brazilians.notAllowed).toEqual([
      players3[2].name,
      players3[3].name,
    ]);
    expect(result.americans.notAllowed).toEqual([
      players3[0].name,
      players3[1].name,
    ]);
  });

  test("Two americans allowed, two brazilians not allowed", () => {
    const result = isPlayerAllowed(casinoEUA, players4);
    expect(result.americans.allowed).toEqual([
      players4[0].name,
      players4[1].name,
    ]);
    expect(result.brazilians.notAllowed).toEqual([
      players4[2].name,
      players4[3].name,
    ]);
  });
});

describe("Exercise 5", () => {
  test("One brazilian allowed 0<length<2", () => {
    const result = isPlayerAllowed(casinoBR, players1);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });
});
