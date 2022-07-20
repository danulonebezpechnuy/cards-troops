import { Component, ViewChild } from '@angular/core';
import { Pair } from './pair';

import { Squad } from './squad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSquads = {} as Pair<Squad>;

  onLeftSelected( squad: Squad ) {
    this.selectedSquads.left = squad;
  }

  onRightSelected( squad: Squad ) {
    this.selectedSquads.right = squad;
  }

}
