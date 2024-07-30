import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatRoomWhereInput = {
  id?: StringFilter;
  isPrivate?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
