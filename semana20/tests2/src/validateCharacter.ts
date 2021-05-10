export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}

export function validateCharacter(character: Character) {
  if (
    !character.name ||
    !character.life ||
    !character.defense ||
    !character.strength
  ) {
    return false;
  }
  if (
    character.life <= 0 ||
    character.defense <= 0 ||
    character.strength <= 0
  ) {
    return false;
  }

  return true;
}
