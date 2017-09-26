import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '王小明';
  addedName = '';
  els: string[]  = [];

  chgName() {
    this.name = '陳大明';
  }

  addName(el) {
    this.els.push(this.addedName);
    this.addedName = '';
    return this.els;
  }

  clickedUser(e) {
    this.addedName = e;
  }

}
