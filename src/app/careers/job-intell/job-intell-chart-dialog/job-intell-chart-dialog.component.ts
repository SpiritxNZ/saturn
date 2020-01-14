import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-job-intell-chart-dialog',
  templateUrl: './job-intell-chart-dialog.component.html',
  styleUrls: ['./job-intell-chart-dialog.component.css']
})
export class JobIntellChartDialogComponent implements OnInit {

  constructor(

    @Inject(MAT_DIALOG_DATA) public dialogData
    )
    {

    }


  ngOnInit() {
    console.log(this.dialogData)
  }

}
