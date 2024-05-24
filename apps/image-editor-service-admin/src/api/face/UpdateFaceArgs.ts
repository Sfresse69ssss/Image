import { FaceWhereUniqueInput } from "./FaceWhereUniqueInput";
import { FaceUpdateInput } from "./FaceUpdateInput";

export type UpdateFaceArgs = {
  where: FaceWhereUniqueInput;
  data: FaceUpdateInput;
};
