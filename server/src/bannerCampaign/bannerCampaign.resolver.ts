import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BannerCampaignResolverBase } from "./base/bannerCampaign.resolver.base";
import { BannerCampaign } from "./base/BannerCampaign";
import { BannerCampaignService } from "./bannerCampaign.service";

@graphql.Resolver(() => BannerCampaign)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BannerCampaignResolver extends BannerCampaignResolverBase {
  constructor(
    protected readonly service: BannerCampaignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
