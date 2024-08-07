import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FaceListRelationFilter } from "../face/FaceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  faces?: FaceListRelationFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
