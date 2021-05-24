import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccerComponent } from './accer.component';

describe('AccerComponent', () => {
  let component: AccerComponent;
  let fixture: ComponentFixture<AccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
