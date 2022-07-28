import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BannerTitle } from "../banner/BannerTitle";
import { BannerClientTitle } from "../bannerClient/BannerClientTitle";

export const BannerCampaignCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="banners"
          reference="Banner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BannerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="bannerclient.id"
          reference="BannerClient"
          label="Client"
        >
          <SelectInput optionText={BannerClientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
