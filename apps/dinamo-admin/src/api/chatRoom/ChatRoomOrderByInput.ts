import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrivate?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
