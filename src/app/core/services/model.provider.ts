import {Injectable, Injector, Type, ɵsetCurrentInjector} from "@angular/core";
import {BaseModel} from "../base/base-model";

@Injectable({
  providedIn: "root"
})
export class ModelProvider {
  constructor(private injector: Injector) {
  }

  public create<TModel extends BaseModel>(model: Type<TModel>): TModel {
    // @ts-ignore
    const factory = model['__factory__'];
    if (factory) {
      ɵsetCurrentInjector(this.injector);
      return factory();
    }
    return new model();
  }
}
