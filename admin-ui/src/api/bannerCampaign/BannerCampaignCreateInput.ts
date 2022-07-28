import { BannerCreateNestedManyWithoutBannerCampaignsInput } from "./BannerCreateNestedManyWithoutBannerCampaignsInput";
import { BannerClientWhereUniqueInput } from "../bannerClient/BannerClientWhereUniqueInput";

export type BannerCampaignCreateInput = {
  banners?: BannerCreateNestedManyWithoutBannerCampaignsInput;
  client: BannerClientWhereUniqueInput;
};
