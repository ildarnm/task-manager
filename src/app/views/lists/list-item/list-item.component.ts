import {Component, EventEmitter, Input, Output} from '@angular/core';
import {List} from "../../../shared/models/list";
import {computed} from "mobx";

@Component({
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() list!: List;
  @Output() remove = new EventEmitter();

  @computed get activeTasksCount(): number {
    return this.list.activeTasks.length;
  }

  removeList() {
    this.remove.emit();
  }
}
