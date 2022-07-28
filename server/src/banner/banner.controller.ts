import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BannerService } from "./banner.service";
import { BannerControllerBase } from "./base/banner.controller.base";

@swagger.ApiTags("banners")
@common.Controller("banners")
export class BannerController extends BannerControllerBase {
  constructor(
    protected readonly service: BannerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
