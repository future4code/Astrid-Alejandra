import { BaseError } from "./BaseError";

export class DuplicatedEmailError extends BaseError {
  constructor() {
    super("Email already registered", 409);
  }
}
