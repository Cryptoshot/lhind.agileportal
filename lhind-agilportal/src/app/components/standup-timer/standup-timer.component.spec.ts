import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupTimerComponent } from './standup-timer.component';

describe('StandupTimerComponent', () => {
  let component: StandupTimerComponent;
  let fixture: ComponentFixture<StandupTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
