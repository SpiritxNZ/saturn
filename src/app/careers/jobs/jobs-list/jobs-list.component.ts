import { Component, OnInit, Directive, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CareerApiServiceService } from '../../../services/career-api-service.service'
import { RepositoryService } from '../../../services/repository.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css', '../../career-styles.css']
})
export class JobsListComponent implements OnInit {
  public jobLists: any;
  public lengthTotal: any;
  public keyword = '';
  public industry = '';
  public industryName = '';
  public location = "";
  public locationName = [];
  public type = '';
  public typeName = '';
  public sortBy = '';
  public currentPage = 1;
  public itemId: any;
  public errorMessage: any;
  public innerHeight: any
  public listingHeight: any
  public itemData: any;
  public pagesIndex: any;
  public titleHref = "";
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private contentservice: CareerApiServiceService,
    private storeValueService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,

  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    // this.getAddressValue();
    this.getSelectedItems();
    this.compoHeight();
  }

  compoHeight() {
    this.innerHeight = window.innerHeight;
    this.listingHeight = this.innerHeight - 185;
  }

  //the function of the middle click
  onMiddleClick(event, act) {
    if (event.button == 0) {
      if (this.titleHref == "" || this.titleHref.indexOf('itemId=') != -1) {
        this.titleHref = "javascript:void(0)";
      }
      this.showData(act)
    }
    if (event.button == 1) {
      window.open('en/jobdetail?itemId=' + act.id, '_blank');
    }
    if (event.button == 2) {
      this.titleHref = '/en/jobdetail?itemId=' + act.id;
    }
  }

  // sent itemid and page number to Url
  showData(act) {
    if (act.id) {
      this.storeValueService.setQueryParams('itemId', act.id);
    } else {
      this.currentPage = act.pageIndex + 1;
      document.getElementById('leftlist').scrollTop = 0;
    }
    this.storeValueService.setQueryParams('page', this.currentPage);
  }

  getSelectedItems() {
    this.contentservice.dropDownItems().subscribe(
      (res) => {
        if (res.dataCon) {
          this.getAddressValue(res.dataCon);
        } else {
          this.errorMessage = "Error! Can't catch Data."
        }
      },
      (err) => {
        this.backendErrorHandler(err);
      }
    )
  }

  // listen the changeof Url in real time
  getAddressValue(datacon) {
    this.activatedRoute.queryParams.subscribe(
      (res) => {
        if (res.searchString) {
          this.keyword = res.searchString;
        } else if (res.searchString == undefined) {
          this.keyword = "";
        }
        if (res.disciplineNum) {
          this.industry = res.disciplineNum;
        }
        if (res.locationNum) {
          this.location = res.locationNum;
          for(let i = 0; i < this.location.length; i++){
            if(this.location[i] == datacon.job_location[i].location_num) {
              this.locationName[i] = datacon.job_location[i].location_name;
            }
          }
        }
        if (res.typeNum) {
          this.type = res.typeNum;
        }
        if (res.page) {
          this.currentPage = res.page;
        }
        if (res.itemId) {
          this.itemId = res.itemId;
        }
        if (res.order_by) {
          this.sortBy = res.order_by;
        } else if (res.order_by == undefined) {
          this.sortBy = "";
        }
        this.titleService.setTitle('Gradspace ' + this.keyword + ' Jobs');
        this.getListData(this.keyword, this.industry, this.location, this.type, this.currentPage, this.sortBy);
      }
    )
  }

  getListData(keyword, industry, location, type, page, orderby) {
    this.contentservice.searchKeyWord(keyword, industry, location, type, page, orderby).subscribe(
      (res) => {
        // console.log(res.error.text)
        this.jobLists = res.data;
        this.lengthTotal = res.total;
        this.currentPage = res.current_page;
        this.pagesIndex = res.current_page - 1;
        this.processing(this.jobLists, this.itemId);
        delete this.errorMessage;
      },
      (err) => {
        this.backendErrorHandler(err);
      }
    )
  }

  processing(data, itemid) {
    for (var i = 0; i < data['length']; i++) {
      if (data[i].id == itemid) {
        this.getDescData(data[i], itemid)
        break;
      } else if (i == 19 && itemid) {
        this.storeValueService.setQueryParams('page', this.currentPage);
      }
    }
  }

  // get description from serve by id 
  getDescData(data, id) {
    this.contentservice.jobdescri(id).subscribe(
      (res) => {
        data.description = res.job_description[0].description;
        this.storeValueService.itemsList.next(data);
      },
      (err) => {
        this.backendErrorHandler(err);
      }
    );
  }

  backendErrorHandler(err) {
    console.warn(err)
    if (err.error.message != null) {
      this.errorMessage = "Sorry, there are no data !"
    }
    else {
      this.errorMessage = err.error.text;
    }
  }
}
