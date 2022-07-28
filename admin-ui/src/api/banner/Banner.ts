import { Asset } from "../asset/Asset";
import { BannerCampaign } from "../bannerCampaign/BannerCampaign";

export type Banner = {
  asset?: Asset | null;
  campaigns?: BannerCampaign | null;
  createdAt: Date;
  id: string;
  size?: "V120x600" | "V300250";
  updatedAt: Date;
};
