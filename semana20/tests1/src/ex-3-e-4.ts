export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}
export enum NATIONALITY {
  AMERICAN = "AMERICAN",
  BRAZILIAN = "BRAZILIAN",
}

export interface Player {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export function isPlayerAllowed(casino: Casino, players: Player[]) {
  const allowedPlayers: Player[] = [];
  const notAllowedPlayers: Player[] = [];

  if (casino.location === LOCATION.BRAZIL) {
    players.map((player) => {
      if (player.age >= 18) {
        allowedPlayers.push(player);
      } else {
        notAllowedPlayers.push(player);
      }
    });
  } else if (casino.location === LOCATION.EUA) {
    players.map((player) => {
      if (player.age >= 21) {
        allowedPlayers.push(player);
      } else {
        notAllowedPlayers.push(player);
      }
    });
  }

  const brazilians = {
    allowed: allowedPlayers
      .filter((p) => p.nationality === NATIONALITY.BRAZILIAN)
      .map((p) => p.name),
    notAllowed: notAllowedPlayers
      .filter((p) => p.nationality === NATIONALITY.BRAZILIAN)
      .map((p) => p.name),
  };

  const americans = {
    allowed: allowedPlayers
      .filter((p) => p.nationality === NATIONALITY.AMERICAN)
      .map((p) => p.name),
    notAllowed: notAllowedPlayers
      .filter((p) => p.nationality === NATIONALITY.AMERICAN)
      .map((p) => p.name),
  };

  return { brazilians, americans };
}
