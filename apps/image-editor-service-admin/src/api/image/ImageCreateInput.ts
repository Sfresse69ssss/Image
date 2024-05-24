import { FaceCreateNestedManyWithoutImagesInput } from "./FaceCreateNestedManyWithoutImagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageCreateInput = {
  faces?: FaceCreateNestedManyWithoutImagesInput;
  uploadedAt?: Date | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
