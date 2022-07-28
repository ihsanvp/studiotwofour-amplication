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
import { AssetWhereUniqueInput } from "../../asset/base/AssetWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { BannerCampaignWhereUniqueInput } from "../../bannerCampaign/base/BannerCampaignWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { EnumBannerSize } from "./EnumBannerSize";
@InputType()
class BannerWhereInput {
  @ApiProperty({
    required: false,
    type: () => AssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetWhereUniqueInput)
  @IsOptional()
  @Field(() => AssetWhereUniqueInput, {
    nullable: true,
  })
  asset?: AssetWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BannerCampaignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BannerCampaignWhereUniqueInput)
  @IsOptional()
  @Field(() => BannerCampaignWhereUniqueInput, {
    nullable: true,
  })
  campaigns?: BannerCampaignWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumBannerSize,
  })
  @IsEnum(EnumBannerSize)
  @IsOptional()
  @Field(() => EnumBannerSize, {
    nullable: true,
  })
  size?: "V120x600" | "V300250";
}
export { BannerWhereInput };
