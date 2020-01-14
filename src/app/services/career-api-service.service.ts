import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CareerApiServiceService {
  private baseUrl: any = environment.baseUrl;

  constructor(private http: HttpClient) { }  

  // search bar dropdown items
  dropDownItems(){
    return this.http.get<any>(this.baseUrl + "/querypara") 
  }

  // get filtering data
  searchKeyWord(keyword, jobdiscipline, joblocation, jobtype, pageSize, orderBy) {
    return this.http.get<any>(this.baseUrl + "/findjobs?" + "key_word=" + keyword + "&job_discipline=" + jobdiscipline + "&job_location=" + joblocation + "&job_type=" + jobtype + "&page=" + pageSize + "&order_by=" + orderBy)
  }

  // get description from an item of data 
  jobdescri(id){
    return this.http.get<any>(this.baseUrl + "/jobdetail?id=" + id);
  }

  //get item by ID
  getItemDetail(id){
    return this.http.get<any>(this.baseUrl + "/findjobs/" + id)
  }

  getJobLocationIntelligence(){
    return this.http.get<any>(this.baseUrl + "/location");
  }

  getJobKeywordIntelligence(){
    return this.http.get<any>(this.baseUrl + "/keyword");
  }
}
