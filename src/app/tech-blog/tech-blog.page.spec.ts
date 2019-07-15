import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlogPage } from './tech-blog.page';

describe('TechBlogPage', () => {
  let component: TechBlogPage;
  let fixture: ComponentFixture<TechBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
