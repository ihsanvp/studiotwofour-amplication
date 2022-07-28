import { Banner as TBanner } from "../api/banner/Banner";

export const BANNER_TITLE_FIELD = "id";

export const BannerTitle = (record: TBanner): string => {
  return record.id || record.id;
};
