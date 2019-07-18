import { TestBed } from '@angular/core/testing';

import { TechBlogService } from './tech-blog.service';

describe('TechBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechBlogService = TestBed.get(TechBlogService);
    expect(service).toBeTruthy();
  });
});
