import { Component, OnInit, Input } from '@angular/core';
import { faListUl, faPlus, faUndoAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { AddTodo } from '../../../../store/actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task;

  faListUl = faListUl;
  faPlus = faPlus;
  faUndoAlt = faUndoAlt;
  faTrashAlt = faTrashAlt;

  customPopoverOptions: any = {
    header: 'Update Status',
    subHeader: 'Select your task Status'
  };

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private store: Store) { }

  ngOnInit() {}

  createChunkLists (todos, size = 3) {
    const chunked_arr = [];
    for (let i = 0; i < todos.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([todos[i]]);
      } else {
        last.push(todos[i]);
      }
    }
    return chunked_arr;
  }

  addTodo () {
    this.store.dispatch(new AddTodo({taskId: this.task.id, todoTitle: "Sample Todo"}));
  }

}
