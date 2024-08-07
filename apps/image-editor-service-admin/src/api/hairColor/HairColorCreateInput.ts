import { FeaturesCreateNestedManyWithoutHairColorsInput } from "./FeaturesCreateNestedManyWithoutHairColorsInput";

export type HairColorCreateInput = {
  color?: string | null;
  featuresItems?: FeaturesCreateNestedManyWithoutHairColorsInput;
};
