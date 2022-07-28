import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetType?: SortOrder;
  bannerId?: SortOrder;
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
