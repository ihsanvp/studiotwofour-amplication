import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "file";

export const AssetTitle = (record: TAsset): string => {
  return record.file || record.id;
};
