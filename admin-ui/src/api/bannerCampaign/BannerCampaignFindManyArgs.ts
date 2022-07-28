import { BannerCampaignWhereInput } from "./BannerCampaignWhereInput";
import { BannerCampaignOrderByInput } from "./BannerCampaignOrderByInput";

export type BannerCampaignFindManyArgs = {
  where?: BannerCampaignWhereInput;
  orderBy?: Array<BannerCampaignOrderByInput>;
  skip?: number;
  take?: number;
};
