/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Banner } from "../../banner/base/Banner";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumAssetAssetType {
  Image = "Image",
  Video = "Video",
  Document = "Document",
  Banner = "Banner",
}

registerEnumType(EnumAssetAssetType, {
  name: "EnumAssetAssetType",
});
