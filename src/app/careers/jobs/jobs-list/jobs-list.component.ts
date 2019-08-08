import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CareerApiServiceService } from '../../../services/career-api-service.service'
import { RepositoryService } from '../../../services/repository.service';
import { Meta, Title } from '@angular/platform-browser';

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
  public location = '';
  public type = '';
  public sortBy = '';
  public currentPage = 1;
  public itemId: any;
  public errorMessage: any;
  public innerHeight: any
  public listingHeight: any
  public itemData: any;
  public pagesIndex: any;

  constructor(
    private contentservice: CareerApiServiceService,
    private storeValueService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,

  ) { }

  ngOnInit() {
    this.getAddressValue();
    this.compoHeight();
  }

  compoHeight() {
    this.innerHeight = window.innerHeight;
    this.listingHeight = this.innerHeight - 185
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

  // listen the changeof Url in real time
  getAddressValue() {
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

  //the function of the middle click
  onMiddleClick(event, id) {
    if (event.button == 1) {
      window.open('en/jobdetail?itemId=' + id, '_blank');
    }
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
