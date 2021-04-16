import { BaseError } from "./BaseError";

export class DuplicatedEmailError extends BaseError {
  constructor(message: string) {
    super(message, 409);
  }
}
