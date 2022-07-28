import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BannerCampaignServiceBase } from "./base/bannerCampaign.service.base";

@Injectable()
export class BannerCampaignService extends BannerCampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
