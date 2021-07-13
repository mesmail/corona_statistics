import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regions } from '../sharedModels/Regions';


const dayAmount: number = 604800000;


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() region: any;
  @Input() weekNum: any;

  firstDate: Date = new Date();
  firstDateString: string = this.firstDate.toISOString().slice(0,10);
  secondDateString: string = "";

  GermanyRegions: any [] = Regions; 

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

onSelect() {
  console.log(this.region);
  console.log(this.weekNum);
}
  data:Array<any> = [
    {id: 1, name: "Week 1"},
    {id: 2, name: "Week 2"},
    {id: 3, name: "Week 3"},
    {id: 4, name: "Week 4"}
];

  ShowData() {

    let tempDate: Date = new Date(this.firstDate.getTime() - (dayAmount*this.weekNum));
    // let secondDate = tempDate.setTime();
    this.secondDateString = tempDate.toISOString().slice(0,10);
    this.router.navigate(['/result',{region: this.region, date1: this.firstDateString, date2: this.secondDateString}]);
  }
}
