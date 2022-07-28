import { Module } from "@nestjs/common";
import { BannerClientModuleBase } from "./base/bannerClient.module.base";
import { BannerClientService } from "./bannerClient.service";
import { BannerClientController } from "./bannerClient.controller";
import { BannerClientResolver } from "./bannerClient.resolver";

@Module({
  imports: [BannerClientModuleBase],
  controllers: [BannerClientController],
  providers: [BannerClientService, BannerClientResolver],
  exports: [BannerClientService],
})
export class BannerClientModule {}
