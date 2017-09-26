import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  isLight = false;

  @Input()
  user = '';

  @Input()
  idx = 0;

  @Output()
  clickUser = new EventEmitter<String>();

  onUserClicked() {
    this.isLight = true;
    this.clickUser.emit(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}
