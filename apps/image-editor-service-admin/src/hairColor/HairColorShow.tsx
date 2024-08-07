import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BODYTYPE_TITLE_FIELD } from "../bodyType/BodyTypeTitle";
import { FACE_TITLE_FIELD } from "../face/FaceTitle";
import { HAIRCOLOR_TITLE_FIELD } from "./HairColorTitle";

export const HairColorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Features"
          target="hairColorId"
          label="FeaturesItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BodyType"
              source="bodytype.id"
              reference="BodyType"
            >
              <TextField source={BODYTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Face" source="face.id" reference="Face">
              <TextField source={FACE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="HairColor"
              source="haircolor.id"
              reference="HairColor"
            >
              <TextField source={HAIRCOLOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="height" source="height" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="weight" source="weight" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
