import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {List} from "../../../shared/models/list";
import {computed, makeObservable} from "mobx";
import {ListsStore} from "../../../stores/lists.store";

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

  constructor(private listsStore: ListsStore) {
  }

  removeList() {
    this.remove.emit();
  }
}
