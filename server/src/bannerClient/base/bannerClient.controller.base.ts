/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BannerClientService } from "../bannerClient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BannerClientCreateInput } from "./BannerClientCreateInput";
import { BannerClientWhereInput } from "./BannerClientWhereInput";
import { BannerClientWhereUniqueInput } from "./BannerClientWhereUniqueInput";
import { BannerClientFindManyArgs } from "./BannerClientFindManyArgs";
import { BannerClientUpdateInput } from "./BannerClientUpdateInput";
import { BannerClient } from "./BannerClient";
import { BannerCampaignFindManyArgs } from "../../bannerCampaign/base/BannerCampaignFindManyArgs";
import { BannerCampaign } from "../../bannerCampaign/base/BannerCampaign";
import { BannerCampaignWhereUniqueInput } from "../../bannerCampaign/base/BannerCampaignWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BannerClientControllerBase {
  constructor(
    protected readonly service: BannerClientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BannerClient })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: BannerClientCreateInput
  ): Promise<BannerClient> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [BannerClient] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(BannerClientFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BannerClient[]> {
    const args = plainToClass(BannerClientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BannerClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BannerClientWhereUniqueInput
  ): Promise<BannerClient | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BannerClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: BannerClientWhereUniqueInput,
    @common.Body() data: BannerClientUpdateInput
  ): Promise<BannerClient | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BannerClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: BannerClientWhereUniqueInput
  ): Promise<BannerClient | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BannerCampaign",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/campaigns")
  @ApiNestedQuery(BannerCampaignFindManyArgs)
  async findManyCampaigns(
    @common.Req() request: Request,
    @common.Param() params: BannerClientWhereUniqueInput
  ): Promise<BannerCampaign[]> {
    const query = plainToClass(BannerCampaignFindManyArgs, request.query);
    const results = await this.service.findCampaigns(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/campaigns")
  async connectCampaigns(
    @common.Param() params: BannerClientWhereUniqueInput,
    @common.Body() body: BannerCampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaigns: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/campaigns")
  async updateCampaigns(
    @common.Param() params: BannerClientWhereUniqueInput,
    @common.Body() body: BannerCampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaigns: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "BannerClient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/campaigns")
  async disconnectCampaigns(
    @common.Param() params: BannerClientWhereUniqueInput,
    @common.Body() body: BannerCampaignWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      campaigns: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}