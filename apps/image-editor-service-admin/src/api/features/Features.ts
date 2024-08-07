import { BodyType } from "../bodyType/BodyType";
import { Face } from "../face/Face";
import { HairColor } from "../hairColor/HairColor";

export type Features = {
  bodyType?: BodyType | null;
  createdAt: Date;
  face?: Face | null;
  hairColor?: HairColor | null;
  height: number | null;
  id: string;
  updatedAt: Date;
  weight: number | null;
};
