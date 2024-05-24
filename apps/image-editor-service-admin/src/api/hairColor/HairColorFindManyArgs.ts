import { HairColorWhereInput } from "./HairColorWhereInput";
import { HairColorOrderByInput } from "./HairColorOrderByInput";

export type HairColorFindManyArgs = {
  where?: HairColorWhereInput;
  orderBy?: Array<HairColorOrderByInput>;
  skip?: number;
  take?: number;
};
