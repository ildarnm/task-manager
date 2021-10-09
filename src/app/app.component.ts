import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ListsStore} from "./stores/lists.store";

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private listStore: ListsStore) {}

  ngOnInit() {
    this.createDemoListAndTasks();
  }

  createDemoListAndTasks() {
    const list = this.listStore.add({ title: 'Work' });
    list.addTask('New brand');
    list.addTask('Update website');
    this.listStore.setActiveList(list.id);
  }
}
