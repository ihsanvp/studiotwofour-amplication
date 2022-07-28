import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BannerTitle } from "../banner/BannerTitle";
import { BannerClientTitle } from "../bannerClient/BannerClientTitle";

export const BannerCampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
