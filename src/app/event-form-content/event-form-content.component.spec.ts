import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormContentComponent } from './event-form-content.component';

describe('EventFormContentComponent', () => {
  let component: EventFormContentComponent;
  let fixture: ComponentFixture<EventFormContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
