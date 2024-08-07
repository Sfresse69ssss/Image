import { FaceUpdateManyWithoutImagesInput } from "./FaceUpdateManyWithoutImagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageUpdateInput = {
  faces?: FaceUpdateManyWithoutImagesInput;
  uploadedAt?: Date | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
