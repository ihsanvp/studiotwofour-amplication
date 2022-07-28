import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BANNERCAMPAIGN_TITLE_FIELD } from "./BannerCampaignTitle";
import { BANNERCLIENT_TITLE_FIELD } from "../bannerClient/BannerClientTitle";

export const BannerCampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Client"
          source="bannerclient.id"
          reference="BannerClient"
        >
          <TextField source={BANNERCLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Banner"
          target="BannerCampaignId"
          label="Banners"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Campaigns"
              source="bannercampaign.id"
              reference="BannerCampaign"
            >
              <TextField source={BANNERCAMPAIGN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Size" source="size" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
