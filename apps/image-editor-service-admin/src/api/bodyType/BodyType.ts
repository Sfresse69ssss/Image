import { Features } from "../features/Features";

export type BodyType = {
  createdAt: Date;
  featuresItems?: Array<Features>;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
