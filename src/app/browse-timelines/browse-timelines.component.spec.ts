import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTimelinesComponent } from './browse-timelines.component';

describe('BrowseTimelinesComponent', () => {
  let component: BrowseTimelinesComponent;
  let fixture: ComponentFixture<BrowseTimelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTimelinesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
