import { Features as TFeatures } from "../api/features/Features";

export const FEATURES_TITLE_FIELD = "id";

export const FeaturesTitle = (record: TFeatures): string => {
  return record.id?.toString() || String(record.id);
};
