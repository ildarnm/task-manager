import {Component, HostListener} from '@angular/core';
import {action, computed, makeObservable, observable} from "mobx";
import {List} from "../../shared/models/list";
import {TasksStore} from "../../stores/tasks.store";
import {id} from "../../core/types/id.type";
import {ListsStore} from "../../stores/lists.store";
import {Task} from "../../shared/models/task";

@Component({
  selector: 'it-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @observable newTaskTitle = '';

  get activeList(): List | undefined {
    return this.listsStore.activeList;
  }

  get isListSelected(): boolean {
    return this.activeList !== undefined;
  }

  constructor(private taskStore: TasksStore, private listsStore: ListsStore) {
    makeObservable(this);
  }

  @HostListener('keydown.enter', ['$event'])
  @action addTask() {
    if (this.newTaskTitle.trim().length === 0 || !this.listsStore.activeListId) return;
    this.taskStore.add({title: this.newTaskTitle, listId: this.listsStore.activeListId, completed: false});
    this.setNewTaskTitle('');
  }

  @action setNewTaskTitle(value: string) {
    this.newTaskTitle = value;
  }

  removeTask(taskId: id) {
    this.taskStore.delete(taskId);
  }

  trackByTaskId(task: Task): number {
    return task.id;
  }
}
