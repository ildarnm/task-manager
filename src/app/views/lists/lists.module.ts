import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import {ListItemModule} from "./list-item/list-item.module";
import {FormsModule} from "@angular/forms";
import {MobxAngularModule} from "mobx-angular";



@NgModule({
  imports: [
    MobxAngularModule,
    CommonModule,
    ListItemModule,
    FormsModule
  ],
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ]
})
export class ListsModule { }
