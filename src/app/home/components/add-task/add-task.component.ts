import { Component, OnInit } from '@angular/core';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  faExpand = faExpand;

  constructor() { }

  ngOnInit() {}

}
