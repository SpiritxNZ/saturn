import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-successcases',
  templateUrl: './success-cases.component.html',
  styleUrls: ['./success-cases.component.css']
})

export class SuccesscasesComponent implements OnInit {
  video1:any;
  video2:any;
  video3:any;
cnoren:string;
videoPersons: any[] = [
  {
    video: 'https://www.youtube.com/embed/nA8XRmy5CpY',
    name: 'Neo',
    uni: 'ICL',
    job: 'Junior Developer',
    jobLoc: 'Hatch Web & Design',
    description: `Neo came to us in March 2017 while he was still attending 
    ICL business school in Auckland. In less than 6 months, Neo came from only 
    basic knowledge in HTML and CSS to being able to proficiently use the 
    Angular framework with JavaScript and TypeScript, and able to use the 
    Laravel framework (PHP) as a RESTful API.`
  },
  {
    video: 'https://www.youtube.com/embed/XQo2aOsN3LU',
    name: 'Bill',
    uni: 'AUT',
    job: 'Junior Developer',
    jobLoc: 'Lancom Technology',
    description: `Bill came to us in June 2017 after he graduated from AUT. 
    While at Gradspace, Bill learnt and entered the depth of the Angular 
    framework, developed essential leadership skills while leading a team 
    of graduates to complete a major commercial project.`
  },
  {
    video: 'https://www.youtube.com/embed/U6M0BbeTyks',
    name: 'Pirlo',
    uni: 'AUT',
    job: 'Intermediate Developer',
    jobLoc: 'Parkable',
    description: `Pirlo came to us in July 2017. While at Gradspace, 
    Pirlo learnt the Angular framework, NodeJS and used them to create a commercial web based chatting application.`
  },
  {
    video: 'https://www.youtube.com/embed/3rf8ELUexZ4',
    name: 'Barric',
    uni: 'Auckland University',
    job: 'Intermediate Developer',
    jobLoc: 'Moustache Republic',
    description: `Barric was a student at Gradspace from March to August 2019. He had no prior experience or any studies done in the IT industry.`
  },
  {
    video: 'https://www.youtube.com/embed/8ricRVOUFp4',
    name: 'David',
    uni: 'Auckland University',
    job: 'Front-End Developer',
    jobLoc: 'Parkable',
    description: `David came to us right after he finished up his university studies in Jan 2019. He left in March 2019 to get his current role.`
  },
  {
    video: 'https://www.youtube.com/embed/yJEpVApliTE',
    name: 'Kevin',
    uni: 'Auckland University',
    job: 'Full Stack Developer',
    jobLoc: 'Marsello',
    description: `Kevin started here when he was still a student at Auckland Uni back in 2018. As a fresh university graduate, he had no prior work experience in the industry.`
  },
  {
    video: 'https://www.youtube.com/embed/3ZKdbkL4A1A',
    name: 'Chris',
    uni: 'Unitec',
    job: 'Junior Developer',
    jobLoc: 'Oppo',
    description: `Chris attended Gradspace from March 2019 to September 2019. He had no prior experience in the IT industry.  `
  },
  {
    video: 'https://www.youtube.com/embed/XD_LmcZErqE',
    name: 'Jesse',
    uni: 'Massey University',
    job: 'Junior Developer',
    jobLoc: 'Brunton NZ',
    description: `Jesse came to Gradspace in May 2019 and secured his offer in October 2019.  He had no prior work experience in NZ.`
  },



];


imgPersons: any[]=[
  {
    image:'../../assets/success_photos/irene.jpg',
    name:'Irene',
    uni:'University of Auckland',
    job:' Junior Developer',
    jobLoc:'Magiq Software',
    description:"Gradspace helped me to improve my technical skills and lots of smart tips on how to make myself more employable. You also get lots of chances to work on real live projects with experienced developers in the programme. It's no surprise that you'll gain heaps of practical experience from the programme that you don’t get from the university. Thanks Gradspace for providing this fantastic program for IT graduates."
  },
  {
    image:'../../assets/success_photos/successcasesmark.jpg',
    name:'Mark',
    uni:'University of Auckland',
    job:' Junior Developer',
    jobLoc:'Sands Software',
    description:'During my time at Gradspace, I learned not only the tech skills such as Angular, Javascript, CSS and Node.js but also soft skills like communication skills, time management skills, teamwork and problem-solving skills. Those soft skills are which you can’t get from the university. It helps me a lot to improve both my tech skills and soft skills til finally, I get a job from Macau as an IT developer. Highly recommend someone who graduated from university but doesn’t have many working experiences.'
  },
  {
    image:'../../assets/success_photos/successcasessnow.jpg',
    name:'Snow',
    uni:'University of Auckland',
    job:'Software tester',
    jobLoc:'Planit',
    description:"It was lucky for me to be an internship in Gradspace before. Since I not only learnt technical skills such as Angular framework, Javascript and CSS programming languages but also gained hands-on experiences in different projects, which is truly helpful and useful when applying for jobs and even using in work. More importantly, it’s not like knowledge which can learn from the university. Huge thanks to Gradspace and recommend graduates who are looking for valuable experiences but no idea where to start."
  },
  {
    image:'../../assets/success_photos/successcasesdean.jpg',
    name:'Dean',
    uni:'Unitec Institute of Technology',
    job:'Software tester',
    jobLoc:'Gentrack',
    description:' I came to Gradspace when I was in my second year at Unitec studying Computing, now still in my third year and haven’t graduated from Unitec yet, I have already found and signed onto a software testing job. At Gradspace not only you learn the most popular coding tools on the market, but more importantly, you get to try out on a real project with a real team which is something you won’t get to do in university. Recommended to anyone who wants to get good employment in IT.',
  },
  {
    image:'../../assets/success_photos/default.png',
    name:'Thomas',
    uni:'',
    job:'Software Developer',
    jobLoc:'Ora International',
    description:"I found Gradspace when I just arrived in NZ, Although I had programming experience in China but I was a fresh immigrate in NZ and didn't know much about what local businesses were looking for. Luckily, Gradspace was able to help me learn NZ industry work standards such as agile and prepare my job-seeker profile such as my CV and Cover Letter. Most importantly helped me prepare for all my interviews - which were many. Highly recommended to anyone who wish to find good work in NZ.",
  },
  {
    image:'../../assets/success_photos/default.png',
    name:'Sarah',
    uni:'Unitec Institute of Technology',
    job:'Software Developer',
    jobLoc:'Jade Software',
    description:"I started at Gradspace when I was just finishing studying Graduate Diploma in Computing at Unitec. I was a junior product manager in China for 1 year, and dosn't have programming experience. Gradspace was able to provide me with much needed experience, I built my project portfolio up from nothing to 3 projects in 4 months, which really helped me to find a job. In addition, Mike will personally help you prepare every interview, which was really helpful. Definitely recommended to anyone like me seeking a IT job.",
  }
]

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private router:Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.translatePage();
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Software developer training programme in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Success Cases');
  }

  translatePage(){
    this.videoPersons.forEach(person => {
      this.translate.setDefaultLang('success-cases-'+this.route.snapshot.paramMap.get('lang'));
      person.video = this.sanitizer.bypassSecurityTrustResourceUrl(person.video);
    });
  }

  ngOnInit() {
  }
}
