import { BannerWhereUniqueInput } from "../banner/BannerWhereUniqueInput";

export type AssetUpdateInput = {
  assetType?: "Image" | "Video" | "Document" | "Banner" | null;
  banner?: BannerWhereUniqueInput | null;
  file?: string | null;
};
