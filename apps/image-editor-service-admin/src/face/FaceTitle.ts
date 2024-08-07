import { Face as TFace } from "../api/face/Face";

export const FACE_TITLE_FIELD = "id";

export const FaceTitle = (record: TFace): string => {
  return record.id?.toString() || String(record.id);
};
