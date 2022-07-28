import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BannerClientResolverBase } from "./base/bannerClient.resolver.base";
import { BannerClient } from "./base/BannerClient";
import { BannerClientService } from "./bannerClient.service";

@graphql.Resolver(() => BannerClient)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BannerClientResolver extends BannerClientResolverBase {
  constructor(
    protected readonly service: BannerClientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
