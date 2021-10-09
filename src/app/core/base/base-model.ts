import { id } from "../types/id.type";
import {makeObservable} from "mobx";

export abstract class BaseModel {
  abstract id: id | undefined;
  abstract setFromJSON(value: any): void;
  abstract getJSON(): any;
}
