import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ChatRoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isPrivate" source="isPrivate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
