import { Component, ViewChild } from '@angular/core';

import { Squad } from './squad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftSelectedSquad?: Squad;
  rightSelectedSquad?: Squad;
}
