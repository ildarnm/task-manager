import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from './list-item.component';
import {MobxAngularModule} from "mobx-angular";

@NgModule({
  imports: [
    MobxAngularModule,
    CommonModule
  ],
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ]
})
export class ListItemModule {
}
