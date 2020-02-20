import { Component, OnInit } from '@angular/core';
import { faLanguage, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss'],
})
export class UserSectionComponent implements OnInit {

  faLanguage = faLanguage;
  faShareAlt = faShareAlt;

  constructor() { }

  ngOnInit() {}

}
