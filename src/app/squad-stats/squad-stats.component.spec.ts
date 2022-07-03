import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadStatsComponent } from './squad-stats.component';

describe('SquadStatsComponent', () => {
  let component: SquadStatsComponent;
  let fixture: ComponentFixture<SquadStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
