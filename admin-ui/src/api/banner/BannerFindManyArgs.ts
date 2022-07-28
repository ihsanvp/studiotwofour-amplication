import { BannerWhereInput } from "./BannerWhereInput";
import { BannerOrderByInput } from "./BannerOrderByInput";

export type BannerFindManyArgs = {
  where?: BannerWhereInput;
  orderBy?: Array<BannerOrderByInput>;
  skip?: number;
  take?: number;
};
