import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BannerCampaignService } from "./bannerCampaign.service";
import { BannerCampaignControllerBase } from "./base/bannerCampaign.controller.base";

@swagger.ApiTags("bannerCampaigns")
@common.Controller("bannerCampaigns")
export class BannerCampaignController extends BannerCampaignControllerBase {
  constructor(
    protected readonly service: BannerCampaignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
