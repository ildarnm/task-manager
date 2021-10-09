import {action, computed, makeObservable, observable} from "mobx";
import {List} from "./list";
import {inject} from "@angular/core";
import {ListsStore} from "../../stores/lists.store";
import {Model} from "../../core/decorators/model.decorator";
import {id} from "../../core/types/id.type";
import {BaseModel} from "../../core/base/base-model";
import {TaskData} from "../interfaces/taskData";

@Model({factory: () => new Task(inject(ListsStore))})
export class Task extends BaseModel {
  @observable id!: id;
  @observable title!: string;
  @observable listId!: id;
  @observable completed = false;

  @computed get list(): List | undefined {
    if (!this.listId) {
      return undefined;
    }
    return this.listsStore.getItemById(this.listId);
  };

  constructor(private listsStore: ListsStore) {
    super();
    makeObservable(this);
  }

  @action setTitle(value: string) {
    this.title = value;
  }

  @action setCompleted(value: boolean) {
    this.completed = value;
  }

  @action setFromJSON(task: TaskData) {
    Object.assign(this, task);
  }

  @action getJSON(): TaskData {
    return {
      id: this.id,
      title: this.title,
      listId: this.listId,
      completed: this.completed
    }
  }
}
