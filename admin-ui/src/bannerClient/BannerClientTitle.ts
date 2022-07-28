import { BannerClient as TBannerClient } from "../api/bannerClient/BannerClient";

export const BANNERCLIENT_TITLE_FIELD = "name";

export const BannerClientTitle = (record: TBannerClient): string => {
  return record.name || record.id;
};
