import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panda3Component } from './panda3.component';

describe('Panda3Component', () => {
  let component: Panda3Component;
  let fixture: ComponentFixture<Panda3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panda3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
