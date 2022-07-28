import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BannerCampaignWhereUniqueInput } from "../bannerCampaign/BannerCampaignWhereUniqueInput";

export type BannerUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  campaigns?: BannerCampaignWhereUniqueInput | null;
  size?: "V120x600" | "V300250";
};
