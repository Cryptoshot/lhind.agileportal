import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupConfigComponent } from './standup-config.component';

describe('StandupConfigComponent', () => {
  let component: StandupConfigComponent;
  let fixture: ComponentFixture<StandupConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
