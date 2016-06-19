import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import "rxjs/Rx";

import { CampersService } from "./campers.service";
import { ICamper } from "./camper";
import { GooddatePipe } from "./gooddate.pipe";

@Component({
  moduleId: module.id,
  selector: 'cl-app',
  templateUrl: 'camper-leaderboard.component.html',
  styleUrls: ['camper-leaderboard.component.css'],
  providers: [CampersService, HTTP_PROVIDERS],
  pipes: [GooddatePipe]
})
export class CAMPERLEADERBOARDAppComponent implements OnInit{
  thirty_selected: boolean = true;
  allTimeCampers: ICamper[];
  last30Campers: ICamper[];
  errorMessage: string;

  constructor(private _campersService: CampersService) { 
  }

  ngOnInit(): void {
    this._campersService.get30DayCampers()
      .subscribe(
      campers => this.last30Campers = campers,
      error => {
        this.errorMessage = "Error connecting to database"
        console.log("Failed to load 30-day leaders");
      });
    
    this._campersService.getOverallCampers()
      .subscribe(
        campers => this.allTimeCampers = campers,
        error => {
          this.errorMessage = "Error connecting to database",
          console.log("Failed to load all-time leaders");
      });
  }

   get30() {
    this.thirty_selected = true;
  }
   getOverall() {
    this.thirty_selected = false;
  }
}
