import { FaceWhereInput } from "./FaceWhereInput";
import { FaceOrderByInput } from "./FaceOrderByInput";

export type FaceFindManyArgs = {
  where?: FaceWhereInput;
  orderBy?: Array<FaceOrderByInput>;
  skip?: number;
  take?: number;
};
