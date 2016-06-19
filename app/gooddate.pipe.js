//stock date method doesn't seem to like strings
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
var core_1 = require("@angular/core");
var GooddatePipe = (function () {
    function GooddatePipe() {
        this.months = {
            "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
            "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"
        };
    }
    GooddatePipe.prototype.transform = function (value) {
        this.year = parseInt(value.substring(0, 4));
        this.month = this.months[value.substring(5, 7)];
        this.day = parseInt(value.substring(8, 10)); //eliminate leading zero
        var d = new Date();
        this.currentYear = d.getFullYear();
        if (this.year < this.currentYear) {
            return this.month + " " + this.year;
        }
        else if (this.year === this.currentYear) {
            return this.month + " " + this.day;
        }
        else {
            return "Error";
        }
    };
    GooddatePipe = __decorate([
        core_1.Pipe({ name: "gooddate" }), 
        __metadata('design:paramtypes', [])
    ], GooddatePipe);
    return GooddatePipe;
}());
exports.GooddatePipe = GooddatePipe;
//# sourceMappingURL=gooddate.pipe.js.map