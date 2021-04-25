import { Character, validateCharacter } from "./validateCharacter";

export function performAttackNoMock(attacker: Character, defender: Character) {
  const validatedAttacker = validateCharacter(attacker);
  const validatedDefender = validateCharacter(defender);

  if (!validatedAttacker || !validatedDefender) {
    throw new Error("Invalid Character");
  }

  const attack: number = attacker.strength - defender.defense;
  if (attack > 0) {
    defender.life -= attack;
  }
}

export function performAttack(
  attacker: Character,
  defender: Character,
  validator: (character: Character) => boolean
) {
  const validatedAttacker = validator(attacker);
  const validatedDefender = validator(defender);

  if (!validatedAttacker || !validatedDefender) {
    throw new Error("Invalid Character");
  }

  const attack: number = attacker.strength - defender.defense;
  if (attack > 0) {
    defender.life -= attack;
  }
}
