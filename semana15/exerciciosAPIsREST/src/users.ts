export enum USERTYPES {
  ADMIN = "admin",
  NORMAL = "normal",
}

export type user = {
  id: number;
  name: string;
  email: string;
  type: USERTYPES;
  age: number;
};

export let users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: USERTYPES.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: USERTYPES.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: USERTYPES.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: USERTYPES.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: USERTYPES.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: USERTYPES.ADMIN,
    age: 60,
  },
];
