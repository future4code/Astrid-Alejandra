import { BaseError } from "./BaseError";

export class NoUsersFoundError extends BaseError {
  constructor() {
    super("No users found", 404);
  }
}
