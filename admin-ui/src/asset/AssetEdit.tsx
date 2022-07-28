import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { BannerTitle } from "../banner/BannerTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
