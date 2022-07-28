import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";
import { BannerCampaignTitle } from "../bannerCampaign/BannerCampaignTitle";

export const BannerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="bannercampaign.id"
          reference="BannerCampaign"
          label="Campaigns"
        >
          <SelectInput optionText={BannerCampaignTitle} />
        </ReferenceInput>
        <SelectInput
          source="size"
          label="Size"
          choices={[
            { label: "v120x600", value: "V120x600" },
            { label: "v300250", value: "V300250" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
