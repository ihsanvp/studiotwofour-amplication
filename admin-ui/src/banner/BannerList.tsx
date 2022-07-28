import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BANNERCAMPAIGN_TITLE_FIELD } from "../bannerCampaign/BannerCampaignTitle";

export const BannerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Banners"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
