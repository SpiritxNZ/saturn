import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CareerApiServiceService } from '../../../services/career-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
  isBrowser=false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private contentservice: CareerApiServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    translate.setDefaultLang('blog-gradspace-intro-' + this.activatedRoute.snapshot.paramMap.get('lang'));
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    if(!this.isBrowser){
      return
    }
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
        console.log(this.jobDetails)
        this.titleService.setTitle('Gradspace | ' + this.jobDetails.title + ' Jobs');
      },
      (err) => {
        console.warn(err),
          this.errorMessage = "Sorry, something went wrong."
      }
    )
  }
}
