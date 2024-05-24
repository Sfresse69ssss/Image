import { Face } from "../face/Face";
import { Image } from "../image/Image";

export type User = {
  createdAt: Date;
  email: string | null;
  faces?: Array<Face>;
  id: string;
  images?: Array<Image>;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
