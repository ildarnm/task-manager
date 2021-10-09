import {action, computed, makeObservable, observable} from "mobx";
import {id} from "../types/id.type";
import {BaseModel} from "./base-model";
import {ModelProvider} from "../services/model.provider";
import {Injectable, Type} from "@angular/core";
import {getGUID} from "../functions/guid";

@Injectable()
export abstract class Collection<TModel extends BaseModel, TPlain extends { id?: id }> {
  @observable.shallow private _items: TModel[] = []; // use observable.shallow on the array to prevent observing the properties of the elements
  protected abstract modelClass: Type<TModel>;

  constructor(protected modelProvider: ModelProvider) {
    makeObservable(this);
  }

  getItemById(id: id): TModel | undefined {
    return this._items.find(i => i.id === id);
  }

  @computed get items(): TModel[] {
    return this._items;
  }

  @action add(item: Partial<TPlain>): TModel {
    if (item.id === undefined) {
      item.id = getGUID();
    }
    const instance = this.modelProvider.create(this.modelClass);
    instance.setFromJSON(item);
    this._items.push(instance);
    return instance;
  }

  @action delete(id: id) {
    this._items = this._items.filter(i => i.id !== id);
  }
}
