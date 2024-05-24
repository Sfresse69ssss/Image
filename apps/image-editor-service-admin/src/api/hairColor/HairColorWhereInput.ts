import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeaturesListRelationFilter } from "../features/FeaturesListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type HairColorWhereInput = {
  color?: StringNullableFilter;
  featuresItems?: FeaturesListRelationFilter;
  id?: StringFilter;
};
