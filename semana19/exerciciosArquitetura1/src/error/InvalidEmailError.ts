import { BaseError } from "./BaseError";

export class InvalidEmailError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}
