import { BaseError } from "./BaseError";

export class NoUsersFoundError extends BaseError {
  constructor(message: string) {
    super(message, 404);
  }
}
