import { FaceUpdateManyWithoutUsersInput } from "./FaceUpdateManyWithoutUsersInput";
import { ImageUpdateManyWithoutUsersInput } from "./ImageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  faces?: FaceUpdateManyWithoutUsersInput;
  images?: ImageUpdateManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};
