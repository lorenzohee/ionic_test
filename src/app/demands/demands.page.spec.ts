import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsPage } from './demands.page';

describe('DemandsPage', () => {
  let component: DemandsPage;
  let fixture: ComponentFixture<DemandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
