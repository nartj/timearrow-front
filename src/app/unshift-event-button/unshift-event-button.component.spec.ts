import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnshiftEventButtonComponent } from './unshift-event-button.component';

describe('UnshiftEventButtonComponent', () => {
  let component: UnshiftEventButtonComponent;
  let fixture: ComponentFixture<UnshiftEventButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnshiftEventButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnshiftEventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
