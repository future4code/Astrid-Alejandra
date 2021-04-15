export type User = {
  name: string;
  nickname: string;
  email: string;
};

export type Task = {
  title: string;
  description: string;
  deadline: string;
  id_created_by: number;
};

export enum Status {
  TODO = "to do",
  DOING = "doing",
  DONE = "done",
}
