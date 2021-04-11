export type User = {
  name: string;
  nickname: string;
  email: string;
};

export type Task = {
  title: string;
  deadline: Date;
  status: Status;
  createdBy: string;
  description: string;
};

export enum Status {
  TODO = "to_do",
  DOING = "doing",
  DONE = "done",
}
