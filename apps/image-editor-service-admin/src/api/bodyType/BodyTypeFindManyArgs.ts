import { BodyTypeWhereInput } from "./BodyTypeWhereInput";
import { BodyTypeOrderByInput } from "./BodyTypeOrderByInput";

export type BodyTypeFindManyArgs = {
  where?: BodyTypeWhereInput;
  orderBy?: Array<BodyTypeOrderByInput>;
  skip?: number;
  take?: number;
};
