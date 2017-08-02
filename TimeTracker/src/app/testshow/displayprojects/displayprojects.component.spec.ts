import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprojectsComponent } from './displayprojects.component';

describe('DisplayprojectsComponent', () => {
  let component: DisplayprojectsComponent;
  let fixture: ComponentFixture<DisplayprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
