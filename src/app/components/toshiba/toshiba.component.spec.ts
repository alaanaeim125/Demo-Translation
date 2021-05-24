import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToshibaComponent } from './toshiba.component';

describe('ToshibaComponent', () => {
  let component: ToshibaComponent;
  let fixture: ComponentFixture<ToshibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToshibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToshibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
