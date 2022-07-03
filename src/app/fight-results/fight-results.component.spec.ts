import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightResultsComponent } from './fight-results.component';

describe('FightResultsComponent', () => {
  let component: FightResultsComponent;
  let fixture: ComponentFixture<FightResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
