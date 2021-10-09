import {Injectable} from '@angular/core';
import {Collection} from "../core/base/collection";
import {List} from "../shared/models/list";
import {ListData} from "../shared/interfaces/listData";
import {id} from "../core/types/id.type";
import {action, makeObservable, observable} from "mobx";
import {ModelProvider} from "../core/services/model.provider";

@Injectable({
  providedIn: "root"
})
export class ListsStore extends Collection<List, ListData> {
  protected modelClass = List;
  @observable activeListId: id | undefined;

  constructor(protected modelProvider: ModelProvider) {
    super(modelProvider);
    makeObservable(this); // don't forgot add this if have an observable field
  }

  get activeList() : List | undefined {
    return this.activeListId !== undefined ? this.getItemById(this.activeListId) : undefined;
  }

  @action setActiveList(id: id | undefined) {
    this.activeListId = id;
  }
}
