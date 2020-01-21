import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-program-developer',
  templateUrl: './program-developer.component.html',
  styleUrls: ['./program-developer.component.css']
})

export class ProgramDeveloperComponent implements OnInit {
  isBrowser=false;
  currentlang=" ";
  courses: { title: string; content: string; }[];

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private route: ActivatedRoute

  ) {
    translate.setDefaultLang('program-developer-'+this.route.snapshot.paramMap.get('lang'));
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Software developer training programme in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Software developer training');


    // this.route.params.subscribe( params => console.log(params) );

    this.courses = [
      {title : "HTML & CSS",  content: `Intermediate + Advanced HTML & CSS <br> Responsive Web Design <br> Style Libraries + Bootstrap <br> Version Management with Git`},
      {title : "JavaScript I",  content: `Basic and intermediate JavaScript <br> Object-Oriented Design <br> Basic Algorithms + Data Structures <br> DOM Traversal and Manipulation`},
      {title : "JavaScript II",  content: `Request & Response Lifecycle <br> AJAX <br> Cookies & Sessions <br> JavaScript <br> ES6 `},
      {title : "Web Architecture",  content: `HTTP and API consumption <br> Client-side & Server-side <br> REST <br> MVC <br> Basic Routing <br> Client-side User Authentication `},
      {title : "Angular",  content: `TypeScript and JavaScript <br> Client-side MVC <br> Angular Router in Single Page Applications <br> Forms in Angular`},
      {title : "React",  content: `Interface Creation using React <br> State Management <br> Redux Architecture <br> React Router `},
      {title : "Software Development Cycle",  content: `Software Development Lifecycle <br> Test Driven Development <br> Waterfall Model <br> Agile Development `},
      {title : "SQL",  content: `Basic Querying <br> Joins and Associations <br> Aggregate Functions <br> Sub-Queries <br>Schema Design `},
      {title : "C#",  content: `Intermediate Algorithms <br> Data Structures  <br> Computational Complexity `},
      {title : "ASP.NET Core",  content: `Models and Controller <br> API Routes <br> LINQ <br> Filesystems <br> Full User Authentication `},
      {title : "ASP.NET Core II ",  content: `Services Integration <br> Middleware, Policies <br> Cache `},
      {title : "Object Oriented Design ",  content: `Principals of Object Oriented Programming <br> Problems of Software Programming <br> SOLID `},
      {title : "DevOps",  content: `Application Deployment  <br> CI/CD <br> Docker <br> Cloud Computing <br> Task Runners <br> AWS & GCP `},
      {title : "Testing",  content: `Testing Lifecycles <br> Automated UI Testing <br> Automated API Testing `},
      {title : "Job Search Portfolio Building",  content: `Resume Preparation <br> Cover Letter Preparation <br> Online Profile Building `},
      {title : "Interview Preparation",  content: `Interview Training <br> Effective Communication <br> Technical Interview Tests Prep <br> Coding Challenges <br> Salary Negotiation Workshop `}
    ]
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
