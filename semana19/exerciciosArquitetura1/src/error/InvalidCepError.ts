import { BaseError } from "./BaseError";

export class InvalidCepError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}
