import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ChatRoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isPrivate" source="isPrivate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
