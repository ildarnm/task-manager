import {id} from "../../core/types/id.type";

export interface TaskData {
  id: id;
  title: string;
  listId: id;
  completed?: boolean;
}
