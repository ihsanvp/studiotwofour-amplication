import { BannerCampaignCreateNestedManyWithoutBannerClientsInput } from "./BannerCampaignCreateNestedManyWithoutBannerClientsInput";

export type BannerClientCreateInput = {
  campaigns?: BannerCampaignCreateNestedManyWithoutBannerClientsInput;
  name: string;
};
