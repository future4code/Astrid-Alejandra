import { canUserBuy } from "../src";
import { user } from "../src/index";

let user1: user = {
  name: "Ástrid",
  credit: 1000,
};
let user2: user = {
  name: "Kai",
  credit: 500,
};
let user3: user = {
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
