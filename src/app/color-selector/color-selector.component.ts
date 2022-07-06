import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  @Input() selectedColor?: string;

  constructor() {}

  ngOnInit(): void {
  }

}
