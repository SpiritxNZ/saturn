import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-aboutus',  
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    // default language is english
    translate.setDefaultLang('about-us-'+this.route.snapshot.paramMap.get('lang'));
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace About us' }
    ])
    this.titleService.setTitle('Gradspace | About ');
  }
  ngOnInit() {}

}