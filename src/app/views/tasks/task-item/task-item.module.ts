import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import {MobxAngularModule} from "mobx-angular";

@NgModule({
  imports: [
    MobxAngularModule,
    CommonModule
  ],
  declarations: [
    TaskItemComponent
  ],
  exports: [
    TaskItemComponent
  ]
})
export class TaskItemModule { }
