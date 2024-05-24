import { FeaturesListRelationFilter } from "../features/FeaturesListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceWhereInput = {
  featuresItems?: FeaturesListRelationFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
