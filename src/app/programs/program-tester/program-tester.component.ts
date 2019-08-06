import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-program-tester',
  templateUrl: './program-tester.component.html',
  styleUrls: ['./program-tester.component.css']
})

export class ProgramTesterComponent implements OnInit {
  isBrowser=false;
  currentlang=" ";
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private route: ActivatedRoute
    
  ) {
    translate.setDefaultLang('program-tester-'+this.route.snapshot.paramMap.get('lang'));
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Software developer training programme in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Software tester training');


    // this.route.params.subscribe( params => console.log(params) );

  }
  passdata()
  {
    this.currentlang=this.route.snapshot.paramMap.get('lang');
  }
  
  ngOnInit() {
    this.passdata()
    // if(!this.isBrowser){
    //   return ;
    // }
  }

}
