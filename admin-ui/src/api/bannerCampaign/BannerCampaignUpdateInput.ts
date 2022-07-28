import { BannerUpdateManyWithoutBannerCampaignsInput } from "./BannerUpdateManyWithoutBannerCampaignsInput";
import { BannerClientWhereUniqueInput } from "../bannerClient/BannerClientWhereUniqueInput";

export type BannerCampaignUpdateInput = {
  banners?: BannerUpdateManyWithoutBannerCampaignsInput;
  client?: BannerClientWhereUniqueInput;
};
