/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, BannerClient, BannerCampaign } from "@prisma/client";

export class BannerClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BannerClientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientFindManyArgs>
  ): Promise<number> {
    return this.prisma.bannerClient.count(args);
  }

  async findMany<T extends Prisma.BannerClientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientFindManyArgs>
  ): Promise<BannerClient[]> {
    return this.prisma.bannerClient.findMany(args);
  }
  async findOne<T extends Prisma.BannerClientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientFindUniqueArgs>
  ): Promise<BannerClient | null> {
    return this.prisma.bannerClient.findUnique(args);
  }
  async create<T extends Prisma.BannerClientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientCreateArgs>
  ): Promise<BannerClient> {
    return this.prisma.bannerClient.create<T>(args);
  }
  async update<T extends Prisma.BannerClientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientUpdateArgs>
  ): Promise<BannerClient> {
    return this.prisma.bannerClient.update<T>(args);
  }
  async delete<T extends Prisma.BannerClientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BannerClientDeleteArgs>
  ): Promise<BannerClient> {
    return this.prisma.bannerClient.delete(args);
  }

  async findCampaigns(
    parentId: string,
    args: Prisma.BannerCampaignFindManyArgs
  ): Promise<BannerCampaign[]> {
    return this.prisma.bannerClient
      .findUnique({
        where: { id: parentId },
      })
      .campaigns(args);
  }
}