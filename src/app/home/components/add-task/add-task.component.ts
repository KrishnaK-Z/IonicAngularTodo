import { Component, OnInit } from '@angular/core';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { AddTask } from '../../../store/actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  faExpand = faExpand;

  constructor(private store: Store) { }

  ngOnInit() {}

  addTask (event) {
    var value = event.target.value.trim();
        if (event.which === 13) {
          this.store.dispatch(new AddTask({todoTitle: value}))
        } else if (event.which === 27) {
          event.target.value = '';
        }
  }

}
