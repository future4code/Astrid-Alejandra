import { performAttack } from "../src/performAttack";
import { Character, validateCharacter } from "../src/validateCharacter";

describe("Testing performAttack", () => {
  const validatorMockFalse = jest.fn(() => {
    return false;
  });
  const validatorMockTrue = jest.fn(() => {
    return true;
  });
  const attacker1: Character = {
    name: "Strongylodon",
    life: 1500,
    strength: 1000,
    defense: 500,
  };
  const defender1: Character = {
    name: "Maxillaria",
    life: 1500,
    strength: 600,
    defense: 800,
  };

  it("Should downgrade defender.life by 200", () => {
    expect.assertions(4);
    performAttack(attacker1, defender1, validatorMockTrue as any);
    expect(validatorMockTrue).toHaveBeenCalled();
    expect(validatorMockTrue).toHaveBeenCalledTimes(2);
    expect(validatorMockTrue).toHaveReturned();
    expect(defender1.life).toBe(1300);
  });

  it("Should throw new Error with message 'Invalid Character'", () => {
    expect.assertions(5);
    try {
      performAttack(attacker1, defender1, validatorMockFalse as any);
    } catch (error) {
      expect(error.message).toEqual("Invalid Character");
      expect(validatorMockFalse).toHaveBeenCalled();
      expect(validatorMockFalse).toHaveBeenCalledTimes(2);
      expect(validatorMockFalse).toHaveReturnedWith(false);
      expect(validatorMockFalse).toHaveReturnedTimes(2);
    }
  });
});
