import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../shared/models/task";

@Component({
  selector: 'it-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter();

  constructor() {
  }

  removeTask() {
    this.remove.emit(this.task.id);
  }

  setCompleted($event: any) {
    this.task.setCompleted($event.target.checked);
  }
}
