import { Character, validateCharacter } from "../src/validateCharacter";

let character: Character = {
  name: "Katu",
  life: 1500,
  strength: 300,
  defense: 500,
};

describe("Testing validateCharacter function", () => {
  it("Should return false for empty name", () => {
    character.name = "";
    const result = validateCharacter(character);
    expect(result).toBe(false);
  });
  it("Should return false for life = 0", () => {
    character.name = "Katu";
    character.life = 0;
    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  it("Should return false for strength = 0", () => {
    character.life = 1500;
    character.strength = 0;
    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  it("Should return false for defense = 0", () => {
    character.strength = 300;
    character.defense = 0;
    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  it("Should return false for life, strength or defense with negative value", () => {
    character.defense = 500;
    character.life = -1;
    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  it("Should return true for all valid input values", () => {
    character.life = 1500;
    const result = validateCharacter(character);
    expect(result).toBe(true);
  });
});
