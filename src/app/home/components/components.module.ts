import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HeaderComponent } from './header/header.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { TodoComponent } from './task-list/task/todo/todo.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    UserSectionComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent,
    TodoComponent,
    FilterTaskComponent
  ],
  exports: [
    HeaderComponent, 
    UserSectionComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent,
    TodoComponent,
    FilterTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
