import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPagesComponent } from './blog-pages.component';

describe('BlogPagesComponent', () => {
  let component: BlogPagesComponent;
  let fixture: ComponentFixture<BlogPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
