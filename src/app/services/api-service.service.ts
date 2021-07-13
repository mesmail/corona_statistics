import { Injectable } from '@angular/core';
import { ApiBaseURL } from '../sharedModels/ApiBaseURL';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../sharedModels/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  getCovidData(_region: string,_date1:string,_date2:string) {
      return this.http.get<ApiResponse>(ApiBaseURL + _region + '?date_from=' + _date1 + '&date_to=' + _date2);
  }
}
