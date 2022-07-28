import { Banner } from "../banner/Banner";
import { BannerClient } from "../bannerClient/BannerClient";

export type BannerCampaign = {
  banners?: Array<Banner>;
  client?: BannerClient;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
