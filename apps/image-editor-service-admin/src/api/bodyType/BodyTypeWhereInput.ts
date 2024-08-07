import { FeaturesListRelationFilter } from "../features/FeaturesListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BodyTypeWhereInput = {
  featuresItems?: FeaturesListRelationFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
