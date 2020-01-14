import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIntellChartDialogComponent } from './job-intell-chart-dialog.component';

describe('JobIntellChartDialogComponent', () => {
  let component: JobIntellChartDialogComponent;
  let fixture: ComponentFixture<JobIntellChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobIntellChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIntellChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
