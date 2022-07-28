import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BannerClientService } from "./bannerClient.service";
import { BannerClientControllerBase } from "./base/bannerClient.controller.base";

@swagger.ApiTags("bannerClients")
@common.Controller("bannerClients")
export class BannerClientController extends BannerClientControllerBase {
  constructor(
    protected readonly service: BannerClientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
