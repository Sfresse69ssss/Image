import { FaceCreateNestedManyWithoutUsersInput } from "./FaceCreateNestedManyWithoutUsersInput";
import { ImageCreateNestedManyWithoutUsersInput } from "./ImageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  faces?: FaceCreateNestedManyWithoutUsersInput;
  images?: ImageCreateNestedManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};
