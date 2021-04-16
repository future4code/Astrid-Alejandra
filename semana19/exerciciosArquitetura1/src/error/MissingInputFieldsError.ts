import { BaseError } from "./BaseError";

export class MissingInputFieldsError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}
