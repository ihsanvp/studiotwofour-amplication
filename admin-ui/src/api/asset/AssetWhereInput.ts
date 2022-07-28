import { BannerWhereUniqueInput } from "../banner/BannerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  assetType?: "Image" | "Video" | "Document" | "Banner";
  banner?: BannerWhereUniqueInput;
  file?: StringNullableFilter;
  id?: StringFilter;
};
