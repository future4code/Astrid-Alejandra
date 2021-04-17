import { BaseError } from "./BaseError";

export class InvalidEmailError extends BaseError {
  constructor() {
    super("Please, enter a valid email", 422);
  }
}
