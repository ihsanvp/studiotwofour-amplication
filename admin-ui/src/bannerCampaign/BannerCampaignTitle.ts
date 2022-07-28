import { BannerCampaign as TBannerCampaign } from "../api/bannerCampaign/BannerCampaign";

export const BANNERCAMPAIGN_TITLE_FIELD = "id";

export const BannerCampaignTitle = (record: TBannerCampaign): string => {
  return record.id || record.id;
};
