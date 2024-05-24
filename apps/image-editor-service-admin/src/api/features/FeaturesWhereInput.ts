import { BodyTypeWhereUniqueInput } from "../bodyType/BodyTypeWhereUniqueInput";
import { FaceWhereUniqueInput } from "../face/FaceWhereUniqueInput";
import { HairColorWhereUniqueInput } from "../hairColor/HairColorWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeaturesWhereInput = {
  bodyType?: BodyTypeWhereUniqueInput;
  face?: FaceWhereUniqueInput;
  hairColor?: HairColorWhereUniqueInput;
  height?: FloatNullableFilter;
  id?: StringFilter;
  weight?: FloatNullableFilter;
};
