import { Component, OnInit, ElementRef, Inject, PLATFORM_ID, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { Router, Route } from '@angular/router';
import { ActivatedRoute, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  chinese = false;
  navStatus = false;
  collapseStatus = false;
  screenStatus = false;
  isBrowser = false;
  language: string;
  component = "";
  otherLanguage='';
  languageUrl = ""

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private elem: ElementRef,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          let ba = event.urlAfterRedirects;
          let e = ba.split("/")
          this.language = e['1']
        console.log(this.language)

          if(this.language == 'en'){
            this.chinese = false;
            this.otherLanguage = "中文"
            this.languageUrl = '/cn/'+e['2']
          }
          if(this.language == 'cn'){
            this.chinese = true;
            this.otherLanguage = 'English';
            this.languageUrl = '/en/'+e['2']
          }
        }
      });
    if (!this.isBrowser) {
      return;
    }
    $(window).resize(() => {
      // console.log(window.innerWidth)
      if (window.innerWidth <= 768) {
        this.screenStatus = true;
      } else {
        this.screenStatus = false;
      }
    })
    $(window).scroll(() => {
      // console.log(window.scrollY)
      if ($(window).scrollTop() >= 60) {
        this.navStatus = true;
      } else {
        this.navStatus = false;
      }
    })
  }
}