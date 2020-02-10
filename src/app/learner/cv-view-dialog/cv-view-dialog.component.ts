import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-view-dialog',
  templateUrl: './cv-view-dialog.component.html',
  styleUrls: ['./cv-view-dialog.component.css']
})
export class CVViewDialogComponent implements OnInit {
  cvObject: any;

  constructor() { }

  ngOnInit() {
    // Get data from localstorage
    this.cvObject = JSON.parse(localStorage.getItem('cv'))
    console.log(this.cvObject)
  }

}
