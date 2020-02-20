import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.scss'],
})
export class FilterTaskComponent implements OnInit {

  customActionSheetOptions: any = {
    header: 'Filter Tasks',
    subHeader: 'Select your option here'
  };

  constructor() { }

  ngOnInit() {}

  onSelectChangevalue () {

  }

}
