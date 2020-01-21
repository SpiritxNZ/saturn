import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { JobIntellChartDialogComponent } from '../job-intell-chart-dialog/job-intell-chart-dialog.component';
import { CareerApiServiceService } from 'src/app/services/career-api-service.service';

@Component({
  selector: 'app-job-intell-home',
  templateUrl: './job-intell-home.component.html',
  styleUrls: ['./job-intell-home.component.css']
})


export class JobIntellHomeComponent implements OnInit {
  public chartData :any;
  public chartLabelLocation = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public chartDataLocation = [{data:[120, 150, 180, 90], label: 'September 2019'}];
  public chartTypeLocation = 'doughnut';
  public chartLegendLocation = true;


  public chartLabelKeyword = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  public chartDataKeyword = [{data:[120, 150, 180, 90, 12, 55, 634, 65, 766, 43, 34, 55, 77, 898, 123, 21], label: 'September 2019'}]
  public chartTypeKeyword = 'pie';
  public chartLegendKeyword = true;


  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    public dialog: MatDialog,
    public careerApiService: CareerApiServiceService
  ) {

    translate.setDefaultLang('blog-gradspace-intro-'+this.route.snapshot.paramMap.get('lang'));
  }

  ngOnInit() {
    this.getDataApi()
  }

  getDataApi(){
    this.careerApiService.getJobLocationIntelligence().subscribe(
      (res)=>{this.chartDataPrep(res.dataCon.keyword, 'chartLabelLocation', 'chartDataLocation', 'location_name', 'total')},
      (err)=>{console.warn(err)}
    )
    this.careerApiService.getJobKeywordIntelligence().subscribe(
      (res)=>{this.chartDataPrep(res.dataCon.keyword, 'chartLabelKeyword', 'chartDataKeyword', 'keyword', 'total_weight')},
      (err)=>{console.warn(err)}
    )
  }

  // This method takes an array
  chartDataPrep(data, c, d, key, value){
    this.chartData[c] = []
    this.chartData[d] = []
    let datas = []

    data.forEach(element => {
      this.chartData[c].push(element[key])
      datas.push(element[value])
    });

    this.chartData[d] = [{data: datas, label:'September 2019'}]
  }


  submited(){
  }

  dialogOpen(title){
    let dialogRef = this.dialog.open(JobIntellChartDialogComponent, {
      height: '600px',
      width: '800px',
      data: {title}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  sorting(values, labels, datas){
    console.log(datas)
    let totalObject = labels.map((d, i)=>{
      return{
        label:d,
        data:datas[0].data[i] || 0
      };
    })
    console.log(totalObject)

    let sortedob = totalObject.sort((a, b)=>{
      return b.data - a.data;
    })

    let newArrayLabel = []
    let newArrayData = []


    sortedob.forEach((d) => {
      newArrayLabel.push(d.label)
      newArrayData.push(d.data)
    });
    this.chartLabelLocation = newArrayLabel
    this.chartDataLocation[0].data = newArrayData
    console.log(this.chartDataLocation)
  }
}