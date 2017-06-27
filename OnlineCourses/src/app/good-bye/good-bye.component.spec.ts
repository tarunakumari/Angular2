import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodByeComponent } from './good-bye.component';

describe('GoodByeComponent', () => {
  let component: GoodByeComponent;
  let fixture: ComponentFixture<GoodByeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodByeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
