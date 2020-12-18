import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panda2Component } from './panda2.component';

describe('Panda2Component', () => {
  let component: Panda2Component;
  let fixture: ComponentFixture<Panda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panda2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
