import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import {TaskItemModule} from "./task-item/task-item.module";
import {FormsModule} from "@angular/forms";
import {MobxAngularModule} from "mobx-angular";

@NgModule({
  imports: [
    MobxAngularModule,
    CommonModule,
    TaskItemModule,
    FormsModule
  ],
  declarations: [
    TasksComponent
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
