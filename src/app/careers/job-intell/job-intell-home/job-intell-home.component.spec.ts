import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIntellHomeComponent } from './job-intell-home.component';

describe('JobIntellHomeComponent', () => {
  let component: JobIntellHomeComponent;
  let fixture: ComponentFixture<JobIntellHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobIntellHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIntellHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
