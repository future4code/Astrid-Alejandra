export interface user {
  name: string;
  credit: number;
}

export function canUserBuy(user: user, totalValue: number): user | undefined {
  if (user.credit >= totalValue) {
    return { ...user, credit: user.credit - totalValue };
  }
  return undefined;
}
