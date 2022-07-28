import { Module } from "@nestjs/common";
import { BannerModuleBase } from "./base/banner.module.base";
import { BannerService } from "./banner.service";
import { BannerController } from "./banner.controller";
import { BannerResolver } from "./banner.resolver";

@Module({
  imports: [BannerModuleBase],
  controllers: [BannerController],
  providers: [BannerService, BannerResolver],
  exports: [BannerService],
})
export class BannerModule {}
