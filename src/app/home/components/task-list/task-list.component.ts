import { Component, OnInit } from '@angular/core';

import { Task } from '../../../model/task';
import { Store, Select, Actions, ofActionSuccessful } from '@ngxs/store';
import { Subject, Observable } from 'rxjs';
import { TaskState } from '../../../store/state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  @Select(TaskState.getTasks)
  tasks: Observable<Task[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {}

}
