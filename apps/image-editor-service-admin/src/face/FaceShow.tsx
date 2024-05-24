import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BODYTYPE_TITLE_FIELD } from "../bodyType/BodyTypeTitle";
import { FACE_TITLE_FIELD } from "./FaceTitle";
import { HAIRCOLOR_TITLE_FIELD } from "../hairColor/HairColorTitle";
import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="image" source="image.id" reference="Image">
          <TextField source={IMAGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Features"
          target="faceId"
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
