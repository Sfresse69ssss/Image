import { Features } from "../features/Features";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Face = {
  createdAt: Date;
  featuresItems?: Array<Features>;
  id: string;
  image?: Image | null;
  updatedAt: Date;
  user?: User | null;
};
