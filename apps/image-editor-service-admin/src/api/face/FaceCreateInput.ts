import { FeaturesCreateNestedManyWithoutFacesInput } from "./FeaturesCreateNestedManyWithoutFacesInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceCreateInput = {
  featuresItems?: FeaturesCreateNestedManyWithoutFacesInput;
  image?: ImageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
