import { FeaturesUpdateManyWithoutFacesInput } from "./FeaturesUpdateManyWithoutFacesInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceUpdateInput = {
  featuresItems?: FeaturesUpdateManyWithoutFacesInput;
  image?: ImageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
