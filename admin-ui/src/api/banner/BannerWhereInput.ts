import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BannerCampaignWhereUniqueInput } from "../bannerCampaign/BannerCampaignWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BannerWhereInput = {
  asset?: AssetWhereUniqueInput;
  campaigns?: BannerCampaignWhereUniqueInput;
  id?: StringFilter;
  size?: "V120x600" | "V300250";
};
