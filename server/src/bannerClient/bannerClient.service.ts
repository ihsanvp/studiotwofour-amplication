import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BannerClientServiceBase } from "./base/bannerClient.service.base";

@Injectable()
export class BannerClientService extends BannerClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
