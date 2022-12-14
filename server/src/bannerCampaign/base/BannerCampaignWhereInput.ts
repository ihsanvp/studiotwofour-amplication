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
import { BannerListRelationFilter } from "../../banner/base/BannerListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BannerClientWhereUniqueInput } from "../../bannerClient/base/BannerClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class BannerCampaignWhereInput {
  @ApiProperty({
    required: false,
    type: () => BannerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BannerListRelationFilter)
  @IsOptional()
  @Field(() => BannerListRelationFilter, {
    nullable: true,
  })
  banners?: BannerListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BannerClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BannerClientWhereUniqueInput)
  @IsOptional()
  @Field(() => BannerClientWhereUniqueInput, {
    nullable: true,
  })
  client?: BannerClientWhereUniqueInput;

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
}
export { BannerCampaignWhereInput };
