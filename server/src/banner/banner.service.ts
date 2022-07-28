import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BannerServiceBase } from "./base/banner.service.base";

@Injectable()
export class BannerService extends BannerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
