import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { JobsListingComponent } from '../jobs-listing/jobs-listing.component';

@Component({
  selector: 'app-jobs-panel',
  templateUrl: './jobs-panel.component.html',
  styleUrls: ['./jobs-panel.component.css', '../../career-styles.css']
})
export class JobsPanelComponent implements OnInit {
  public bodyHeight = window.innerHeight;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    translate.setDefaultLang('blog-gradspace-intro-'+this.route.snapshot.paramMap.get('lang'));
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace Jobs and Careers' }
    ])
    this.titleService.setTitle('Gradspace | Jobs and Careers ');
  }

  ngOnInit() {
  }

}
