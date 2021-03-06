import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalPage } from '../../../../../shared/modal/modal.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todoChunk;
  @Input() listId;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  isEdit = false;

  constructor(public modalController: ModalController) {

  }

  editTodo (todoId) {
    // var id = this.listId + "-" + todoId;
    this.isEdit = true
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      swipeToClose: true,
      mode: 'ios',
      cssClass: 'delete-todo',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

  ngOnInit() {}

}
