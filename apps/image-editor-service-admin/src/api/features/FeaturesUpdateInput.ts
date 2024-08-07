import { BodyTypeWhereUniqueInput } from "../bodyType/BodyTypeWhereUniqueInput";
import { FaceWhereUniqueInput } from "../face/FaceWhereUniqueInput";
import { HairColorWhereUniqueInput } from "../hairColor/HairColorWhereUniqueInput";

export type FeaturesUpdateInput = {
  bodyType?: BodyTypeWhereUniqueInput | null;
  face?: FaceWhereUniqueInput | null;
  hairColor?: HairColorWhereUniqueInput | null;
  height?: number | null;
  weight?: number | null;
};
