import { BodyType as TBodyType } from "../api/bodyType/BodyType";

export const BODYTYPE_TITLE_FIELD = "typeField";

export const BodyTypeTitle = (record: TBodyType): string => {
  return record.typeField?.toString() || String(record.id);
};
