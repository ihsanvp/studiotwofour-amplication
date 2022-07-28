import { BannerClientWhereInput } from "./BannerClientWhereInput";
import { BannerClientOrderByInput } from "./BannerClientOrderByInput";

export type BannerClientFindManyArgs = {
  where?: BannerClientWhereInput;
  orderBy?: Array<BannerClientOrderByInput>;
  skip?: number;
  take?: number;
};
