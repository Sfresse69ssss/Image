import { FeaturesWhereInput } from "./FeaturesWhereInput";
import { FeaturesOrderByInput } from "./FeaturesOrderByInput";

export type FeaturesFindManyArgs = {
  where?: FeaturesWhereInput;
  orderBy?: Array<FeaturesOrderByInput>;
  skip?: number;
  take?: number;
};
