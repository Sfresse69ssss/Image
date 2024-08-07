import { Face } from "../face/Face";
import { User } from "../user/User";

export type Image = {
  createdAt: Date;
  faces?: Array<Face>;
  id: string;
  updatedAt: Date;
  uploadedAt: Date | null;
  url: string | null;
  user?: User | null;
};
