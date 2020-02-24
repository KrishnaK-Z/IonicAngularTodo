import { Component, OnInit, Input } from '@angular/core';
import { faListUl, faPlus, faUndoAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  constructor() { }

  ngOnInit() {}

}
