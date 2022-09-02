import { IAccountProfile } from "shared/types";
import { ValidationImplType } from "./types";

export const authenticatedUserValidationImpl: ValidationImplType<
  IAccountProfile
> = async (req) => {
  if (!req.user) {
    throw new Error(
      "A non authenticated route tried to access user from request"
    );
  }
  return req.user;
};