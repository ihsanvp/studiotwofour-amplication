import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { BannerTitle } from "../banner/BannerTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="assetType"
          label="Asset Type"
          choices={[
            { label: "image", value: "Image" },
            { label: "video", value: "Video" },
            { label: "document", value: "Document" },
            { label: "banner", value: "Banner" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="banner.id" reference="Banner" label="Banner">
          <SelectInput optionText={BannerTitle} />
        </ReferenceInput>
        <TextInput label="File" source="file" />
      </SimpleForm>
    </Create>
  );
};
