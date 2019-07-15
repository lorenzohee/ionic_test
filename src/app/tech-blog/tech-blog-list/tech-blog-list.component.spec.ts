import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlogListComponent } from './tech-blog-list.component';

describe('TechBlogListComponent', () => {
  let component: TechBlogListComponent;
  let fixture: ComponentFixture<TechBlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBlogListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
