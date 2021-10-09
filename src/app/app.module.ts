import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MobxAngularModule} from "mobx-angular";
import {ListsModule} from "./views/lists/lists.module";
import {TasksModule} from "./views/tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MobxAngularModule,
    BrowserModule,
    ListsModule,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
