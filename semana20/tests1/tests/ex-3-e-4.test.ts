import {
  Casino,
  isPlayerAllowed,
  LOCATION,
  NATIONALITY,
  Player,
} from "../src/ex-3";

const casino1: Casino = {
  name: "Casino BR 1",
  location: LOCATION.BRAZIL,
};
const casino2: Casino = {
  name: "Casino BR 2",
  location: LOCATION.BRAZIL,
};
const casino3: Casino = {
  name: "Casino EUA 1",
  location: LOCATION.EUA,
};
const casino4: Casino = {
  name: "Casino EUA 2",
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
    const result = isPlayerAllowed(casino1, players1);
    expect(result.brazilians.allowed).toEqual([players1[0].name]);
  });

  test("One american allowed", () => {
    const result = isPlayerAllowed(casino2, players2);
    expect(result.americans.allowed).toEqual([players2[0].name]);
  });

  test("No one allowed", () => {
    const result = isPlayerAllowed(casino3, players3);
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
    const result = isPlayerAllowed(casino4, players4);
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
