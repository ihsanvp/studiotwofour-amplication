import { Module } from "@nestjs/common";
import { BannerCampaignModuleBase } from "./base/bannerCampaign.module.base";
import { BannerCampaignService } from "./bannerCampaign.service";
import { BannerCampaignController } from "./bannerCampaign.controller";
import { BannerCampaignResolver } from "./bannerCampaign.resolver";

@Module({
  imports: [BannerCampaignModuleBase],
  controllers: [BannerCampaignController],
  providers: [BannerCampaignService, BannerCampaignResolver],
  exports: [BannerCampaignService],
})
export class BannerCampaignModule {}
