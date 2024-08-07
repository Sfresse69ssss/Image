import { HairColor as THairColor } from "../api/hairColor/HairColor";

export const HAIRCOLOR_TITLE_FIELD = "color";

export const HairColorTitle = (record: THairColor): string => {
  return record.color?.toString() || String(record.id);
};
