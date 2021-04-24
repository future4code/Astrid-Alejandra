export interface User {
  name: string;
  credit: number;
}

export function canUserBuy(user: User, totalValue: number): User | undefined {
  if (user.credit >= totalValue) {
    return { ...user, credit: user.credit - totalValue };
  }
  return undefined;
}
