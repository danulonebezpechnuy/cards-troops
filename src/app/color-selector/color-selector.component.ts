import { Component, OnInit, Input } from '@angular/core';
import { Quality } from '../quality';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  quality?: number;
  qualityKeys: number[];
  qualities = Quality;

  @Input() public set selectedQuality(value: Quality) {
    this.quality = value;
  }

  constructor() {
    this.qualityKeys = Object.keys(this.qualities)
        .filter(key => !isNaN(Number(key)))
        .map(Number);
  }

  ngOnInit(): void {}

}
