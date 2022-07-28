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
import { AssetService } from "../asset.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AssetCreateInput } from "./AssetCreateInput";
import { AssetWhereInput } from "./AssetWhereInput";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetFindManyArgs } from "./AssetFindManyArgs";
import { AssetUpdateInput } from "./AssetUpdateInput";
import { Asset } from "./Asset";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AssetControllerBase {
  constructor(
    protected readonly service: AssetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Asset })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: AssetCreateInput): Promise<Asset> {
    return await this.service.create({
      data: {
        ...data,

        banner: data.banner
          ? {
              connect: data.banner,
            }
          : undefined,
      },
      select: {
        assetType: true,

        banner: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        file: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Asset] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(AssetFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Asset[]> {
    const args = plainToClass(AssetFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        assetType: true,

        banner: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        file: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        assetType: true,

        banner: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        file: true,
        id: true,
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
    resource: "Asset",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() data: AssetUpdateInput
  ): Promise<Asset | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          banner: data.banner
            ? {
                connect: data.banner,
              }
            : undefined,
        },
        select: {
          assetType: true,

          banner: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          file: true,
          id: true,
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
    resource: "Asset",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          assetType: true,

          banner: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          file: true,
          id: true,
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
}
