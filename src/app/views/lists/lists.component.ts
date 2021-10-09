import {Component, HostListener} from '@angular/core';
import {action, computed, makeObservable, observable} from "mobx";
import {ListsStore} from "../../stores/lists.store";
import {List} from "../../shared/models/list";
import {id} from "../../core/types/id.type";

@Component({
  selector: 'it-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent {
  @observable newListTitle = '';

  @computed get lists(): List[] {
    return this.listsStore.items;
  }

  @computed get activeListId(): id | undefined {
    return this.listsStore.activeListId;
  }

  constructor(private listsStore: ListsStore) {
    makeObservable(this); // don't forgot add this if have an observable field
  }

  @action setNewListTitle(value: string) {
    this.newListTitle = value;
  }

  handleNewTaskTitleInput({ target }: Event) {
    this.setNewListTitle((target as HTMLInputElement).value);
  }

  @HostListener('keydown.enter', ['$event'])
  @action addList() {
    if (this.newListTitle.trim().length === 0) return;
    const newList = this.listsStore.add({title: this.newListTitle});
    const isSingleList = this.listsStore.items.length === 1;
    if (isSingleList) {
      this.listsStore.setActiveList(newList.id);
    }
    this.setNewListTitle('');
  }

  removeList(listId: id) {
    this.listsStore.delete(listId);
  }

  setActiveList(id: id) {
    this.listsStore.setActiveList(id);
  }

  trackByListId(index: number, list: List) {
    return list.id;
  }
}
