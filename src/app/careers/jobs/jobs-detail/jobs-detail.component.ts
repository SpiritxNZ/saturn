import { Component, OnInit } from '@angular/core';
import { CareerApiServiceService } from '../../../services/career-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css', '../../career-styles.css']
})
export class JobsDetailComponent implements OnInit {
  public action: any;
  public description: any;
  public innerHeight: any;
  public listingHeight: any;
  public jobDetails: any;
  public errorMessage: string;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private contentservice: CareerApiServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    translate.setDefaultLang('blog-gradspace-intro-' + this.activatedRoute.snapshot.paramMap.get('lang'));
  }

  ngOnInit() {
    this.compoHeight();
    this.getJobItem();
  }

  compoHeight() {
    this.innerHeight = window.innerHeight;
    this.listingHeight = this.innerHeight - 120
  }

  // get a item from jobs-list.component clicking
  getJobItem() {
    // Change this part below to dynamic
    let id = this.activatedRoute.snapshot['_routerState'].url.substring(21);
    this.contentservice.getItemDetail(id).subscribe(
      (res) => {
        this.getJobDescri(res.job[0], id);
      }
    )
  }

  // get the detail of a item by id
  getJobDescri(data, id) {
    this.contentservice.jobdescri(id).subscribe(
      (act) => {
        data.description = act.job_description[0].description;
        this.jobDetails = data;
        this.titleService.setTitle('Gradspace | ' + this.jobDetails.title + ' Jobs');
      },
      (err) => {
        console.warn(err),
          this.errorMessage = "Sorry, something went wrong."
      }
    )
  }
}
