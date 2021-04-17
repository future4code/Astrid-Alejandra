import { BaseError } from "./BaseError";

export class MissingInputFieldsError extends BaseError {
  constructor() {
    super("Please, complete every field", 422);
  }
}
