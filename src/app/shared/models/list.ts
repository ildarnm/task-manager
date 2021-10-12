import {action, computed, makeObservable, observable} from "mobx";
import {BaseModel} from "../../core/base/base-model";
import {ListData} from "../interfaces/listData";
import {Model} from "../../core/decorators/model.decorator";
import {inject} from "@angular/core";
import {TasksStore} from "../../stores/tasks.store";
import {Task} from "./task";
import {id} from "../../core/types/id.type";

@Model({factory: () => new List(inject(TasksStore))}) // defines model factory
export class List extends BaseModel {
  @observable id!: id;
  @observable title!: string;

  @computed get tasks(): Task[] {
    return this.tasksStore.items.filter(i => i.listId === this.id);
  }

  @computed get activeTasks(): Task[] {
    return this.tasks.filter(t => !t.completed);
  }

  constructor(private tasksStore: TasksStore) {
    super();
    makeObservable(this);
  }

  @action addTask(title: string) {
    this.tasksStore.add({
      title,
      listId: this.id,
    })
  }

  @action setFromJSON(data: ListData) {
    Object.assign(this, data);
  }

  getJSON(): ListData {
    return {
      id: this.id,
      title: this.title
    }
  }
}
