import { BannerCampaignListRelationFilter } from "../bannerCampaign/BannerCampaignListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BannerClientWhereInput = {
  campaigns?: BannerCampaignListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
