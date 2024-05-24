import { FaceListRelationFilter } from "../face/FaceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageWhereInput = {
  faces?: FaceListRelationFilter;
  id?: StringFilter;
  uploadedAt?: DateTimeNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
