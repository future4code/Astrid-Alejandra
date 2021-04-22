import { canUserBuy } from "../src/ex-1-e-2";
import { User } from "../src/ex-1-e-2";

const user1: User = {
  name: "Ástrid",
  credit: 1000,
};
const user2: User = {
  name: "Kai",
  credit: 500,
};
const user3: User = {
  name: "Moka",
  credit: 300,
};

const totalValue: number = 500;

describe("Purchase tests", () => {
  test("Credit greater than total value", () => {
    expect(canUserBuy(user1, totalValue)).toEqual({
      name: user1.name,
      credit: 500,
    });
  });
  test("Credit equals to total value ", () => {
    expect(canUserBuy(user2, totalValue)).toEqual({
      name: user2.name,
      credit: 0,
    });
  });
  test("Credit lesser than total value ", () => {
    expect(canUserBuy(user3, totalValue)).not.toBeDefined();
  });
});
