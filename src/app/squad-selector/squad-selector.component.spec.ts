import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadSelectorComponent } from './squad-selector.component';

describe('SquadSelectorComponent', () => {
  let component: SquadSelectorComponent;
  let fixture: ComponentFixture<SquadSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
