import { BaseError } from "./BaseError";

export class InvalidPasswordError extends BaseError {
  constructor() {
    super("Password is incorrect", 422);
  }
}
