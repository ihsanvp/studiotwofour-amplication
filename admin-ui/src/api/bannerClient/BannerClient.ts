import { BannerCampaign } from "../bannerCampaign/BannerCampaign";

export type BannerClient = {
  campaigns?: Array<BannerCampaign>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
