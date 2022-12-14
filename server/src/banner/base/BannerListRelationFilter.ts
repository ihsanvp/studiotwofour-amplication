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
import { BannerWhereInput } from "./BannerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BannerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BannerWhereInput,
  })
  @ValidateNested()
  @Type(() => BannerWhereInput)
  @IsOptional()
  @Field(() => BannerWhereInput, {
    nullable: true,
  })
  every?: BannerWhereInput;

  @ApiProperty({
    required: false,
    type: () => BannerWhereInput,
  })
  @ValidateNested()
  @Type(() => BannerWhereInput)
  @IsOptional()
  @Field(() => BannerWhereInput, {
    nullable: true,
  })
  some?: BannerWhereInput;

  @ApiProperty({
    required: false,
    type: () => BannerWhereInput,
  })
  @ValidateNested()
  @Type(() => BannerWhereInput)
  @IsOptional()
  @Field(() => BannerWhereInput, {
    nullable: true,
  })
  none?: BannerWhereInput;
}
export { BannerListRelationFilter };
