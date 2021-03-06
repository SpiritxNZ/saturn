import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../services/repository.service';

@Component({
  selector: 'app-jobs-description',
  templateUrl: './jobs-description.component.html',
  styleUrls: ['./jobs-description.component.css', '../../career-styles.css']
})
export class JobsDescriptionComponent implements OnInit {
  public action: any;
  public innerHeight: any;
  public listingHeight: any;
  errorMessage: string;

  constructor(
    private storeValueService: RepositoryService
  ) { }

  ngOnInit() {
    this.compoHeight();
    this.getJobItem();
  }

  compoHeight() {
    this.innerHeight = window.innerHeight;
    this.listingHeight = this.innerHeight - 120
  }

  // get a item from jobs-list.component clicking
  getJobItem() {
    this.storeValueService.getItemsList.subscribe(
      (item) => {
        this.action = item;
        document.getElementById('rightlist').scrollTop = 0;
      }
    );
  }
}
