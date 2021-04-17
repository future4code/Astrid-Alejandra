import { BaseError } from "./BaseError";

export class MissingTokenError extends BaseError {
  constructor() {
    super("Token is missing", 401);
  }
}
