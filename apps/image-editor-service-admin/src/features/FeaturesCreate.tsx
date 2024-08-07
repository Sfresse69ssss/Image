import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BodyTypeTitle } from "../bodyType/BodyTypeTitle";
import { FaceTitle } from "../face/FaceTitle";
import { HairColorTitle } from "../hairColor/HairColorTitle";

export const FeaturesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bodyType.id"
          reference="BodyType"
          label="BodyType"
        >
          <SelectInput optionText={BodyTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="face.id" reference="Face" label="Face">
          <SelectInput optionText={FaceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="hairColor.id"
          reference="HairColor"
          label="HairColor"
        >
          <SelectInput optionText={HairColorTitle} />
        </ReferenceInput>
        <NumberInput label="height" source="height" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
