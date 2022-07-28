import { Banner } from "../banner/Banner";

export type Asset = {
  assetType?: "Image" | "Video" | "Document" | "Banner" | null;
  banner?: Banner | null;
  createdAt: Date;
  file: string | null;
  id: string;
  updatedAt: Date;
};
