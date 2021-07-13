import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { ApiResponse } from "../sharedModels/ApiResponse";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: ApiResponse = new ApiResponse();

  Loading: boolean = true;
  region: string = "";
  date1: string = "";
  date2: string = "";
  totally_confirmed: number = 0;
  totally_deaths: number = 0;
  totally_recovered: number = 0;
  array: object[] = [];

  constructor(private apiServ: ApiServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.region = this.activatedRoute.snapshot.paramMap.get('region') as string;
    this.date1 = this.activatedRoute.snapshot.paramMap.get('date1') as string;
    this.date2 = this.activatedRoute.snapshot.paramMap.get('date2') as string;

    this.apiServ.getCovidData(this.region.toLowerCase(),this.date2,this.date1)
    .subscribe(
      (value) => {
        this.Loading = false;
        this.result = value;
        this.ExtractData();
      }
    )
  }

  ExtractData() {
    let TC2: number = 0;
    let TC1: number = 0;
    let TD2: number = 0;
    let TD1: number = 0;
    let TR2: number = 0;
    let TR1: number = 0;
    
    this.result.dates[this.date2.toString()].countries.Germany.regions
    .forEach((elem) => {TC2 = elem.today_confirmed});
    this.result.dates[this.date1.toString()].countries.Germany.regions
    .forEach((elem) => {TC1 = elem.today_confirmed});

    this.result.dates[this.date2.toString()].countries.Germany.regions
    .forEach((elem) => {TD2 = elem.today_deaths});
    this.result.dates[this.date1.toString()].countries.Germany.regions
    .forEach((elem) => {TD1 = elem.today_deaths});

    this.result.dates[this.date2.toString()].countries.Germany.regions
    .forEach((elem) => {TR2 = elem.today_recovered});
    this.result.dates[this.date1.toString()].countries.Germany.regions
    .forEach((elem) => {TR1 = elem.today_recovered});

    console.log("TC1 value = " + TC1);
    console.log("TC2 value = " + TC2);
    console.log("TD1 value = " + TD1);
    console.log("TD2 value = " + TD2);
    console.log("TR1 value = " + TR1);
    console.log("TR2 value = " + TR2);


    this.totally_confirmed = TC1 - TC2;
    this.totally_deaths = TD1 - TD2;
    this.totally_recovered = TR1 - TR2;
  }

  Return() {
    this.router.navigate(["/select"]);
  }

}
