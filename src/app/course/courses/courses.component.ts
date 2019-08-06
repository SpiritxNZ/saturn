import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseId:any;
  currentLecture: any;

  // /**Test data for course ---------- */
  name = "Course Title"; 
  target = "University Level";

  lectures: any[] = [
    {
      name: "Fidentus Omnium", desc: "Information about the video. Illo et et laborum maxime ut nam. Doloribus et enim voluptatem \
    quidem dignissimos et. Fuga vitae earum distinctio et officia dolor et aliquam.",
      video: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/4CbLXeGSDxg")
    },
    { name: "Magister Mentium", desc: "description", video: null },
    { name: "Lorem Ipsum", desc: "description", video: null },
    { name: "Fidentus Omnium", desc: "description", video: null },
    { name: "Magister Mentium", desc: "description", video: null },
    { name: "Lorem Ipsum", desc: "description", video: null },
    { name: "Fidentus Omnium", desc: "description", video: null }
  ];

  courseLecturer = {
    name: "Edwin Zhu", 
    role: "Senior Lecturer",
    subject: "Backend development", 
    image: "/assets/tutor_images/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    expList: [] = [
    "Graduated from such-and-such",
    "4 years experience with blablabla",
    "Bullet point"
    ]
  };
  isBrowser: boolean;

  /** End of test data -------------------------- */

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    public apiService: ApiService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    
    if(!this.isBrowser){
      return ;
    }

    translate.setDefaultLang('courses-'+this.route.snapshot.paramMap.get('lang'));
    this.courseId = this.route.snapshot.params['id'];
    this.currentLecture = 0;
    
  }

  ngOnInit() {
    // // Get the course data from API
    this.apiService.showCourse(this.courseId).subscribe(
      (res)=>console.log(res),
      (err)=>console.warn(err)
    )

  }

  // sets the current lecture by index
  onClickLecture(i: any) {
    this.currentLecture = i;
  }

}
