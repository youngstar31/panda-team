import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panda1Component } from './panda1.component';

describe('Panda1Component', () => {
  let component: Panda1Component;
  let fixture: ComponentFixture<Panda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panda1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
