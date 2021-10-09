import {Injectable} from '@angular/core';
import {Collection} from "../core/base/collection";
import {Task} from "../shared/models/task";
import {TaskData} from "../shared/interfaces/taskData"
import {id} from "../core/types/id.type";
import {ModelProvider} from "../core/services/model.provider";

@Injectable({
  providedIn: "root"
})
export class TasksStore extends Collection<Task, TaskData> {
  protected modelClass = Task;

  constructor(protected modelProvider: ModelProvider) {
    super(modelProvider);
  }

  getTaskByListId(id: id): Task[] {
    return this.items.filter(i => i.listId === id);
  }
}
