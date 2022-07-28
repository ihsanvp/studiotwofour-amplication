import { BannerListRelationFilter } from "../banner/BannerListRelationFilter";
import { BannerClientWhereUniqueInput } from "../bannerClient/BannerClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BannerCampaignWhereInput = {
  banners?: BannerListRelationFilter;
  client?: BannerClientWhereUniqueInput;
  id?: StringFilter;
};
