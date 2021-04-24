import { BaseError } from "./BaseError";

export class InvalidRoleInputError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}
