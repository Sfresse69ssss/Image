import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FeaturesTitle } from "../features/FeaturesTitle";

export const HairColorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceArrayInput
          source="featuresItems"
          reference="Features"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeaturesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
