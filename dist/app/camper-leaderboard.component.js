"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require("rxjs/Rx");
var campers_service_1 = require("./campers.service");
var gooddate_pipe_1 = require("./gooddate.pipe");
var CAMPERLEADERBOARDAppComponent = (function () {
    function CAMPERLEADERBOARDAppComponent(_campersService) {
        this._campersService = _campersService;
        this.thirty_selected = true;
    }
    CAMPERLEADERBOARDAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._campersService.get30DayCampers()
            .subscribe(function (campers) { return _this.last30Campers = campers; }, function (error) {
            _this.errorMessage = "Error connecting to database";
            console.log("Failed to load 30-day leaders");
        });
        this._campersService.getOverallCampers()
            .subscribe(function (campers) { return _this.allTimeCampers = campers; }, function (error) {
            _this.errorMessage = "Error connecting to database",
                console.log("Failed to load all-time leaders");
        });
    };
    CAMPERLEADERBOARDAppComponent.prototype.get30 = function () {
        this.thirty_selected = true;
    };
    CAMPERLEADERBOARDAppComponent.prototype.getOverall = function () {
        this.thirty_selected = false;
    };
    CAMPERLEADERBOARDAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cl-app',
            templateUrl: 'camper-leaderboard.component.html',
            styleUrls: ['camper-leaderboard.component.css'],
            providers: [campers_service_1.CampersService, http_1.HTTP_PROVIDERS],
            pipes: [gooddate_pipe_1.GooddatePipe]
        }), 
        __metadata('design:paramtypes', [campers_service_1.CampersService])
    ], CAMPERLEADERBOARDAppComponent);
    return CAMPERLEADERBOARDAppComponent;
}());
exports.CAMPERLEADERBOARDAppComponent = CAMPERLEADERBOARDAppComponent;
//# sourceMappingURL=camper-leaderboard.component.js.map