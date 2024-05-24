import { Features } from "../features/Features";

export type HairColor = {
  color: string | null;
  createdAt: Date;
  featuresItems?: Array<Features>;
  id: string;
  updatedAt: Date;
};
