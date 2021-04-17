import { BaseError } from "./BaseError";

export class UnregisteredEmailError extends BaseError {
  constructor() {
    super("Email is not registered. Please sign up first.", 401);
  }
}
