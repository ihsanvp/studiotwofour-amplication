/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumAssetAssetType } from "./EnumAssetAssetType";
import { IsEnum, IsOptional, ValidateNested, IsString } from "class-validator";
import { BannerWhereUniqueInput } from "../../banner/base/BannerWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class AssetCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumAssetAssetType,
  })
  @IsEnum(EnumAssetAssetType)
  @IsOptional()
  @Field(() => EnumAssetAssetType, {
    nullable: true,
  })
  assetType?: "Image" | "Video" | "Document" | "Banner" | null;

  @ApiProperty({
    required: false,
    type: () => BannerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BannerWhereUniqueInput)
  @IsOptional()
  @Field(() => BannerWhereUniqueInput, {
    nullable: true,
  })
  banner?: BannerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  file?: string | null;
}
export { AssetCreateInput };
