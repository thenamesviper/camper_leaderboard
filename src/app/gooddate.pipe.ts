//stock date method doesn't seem to like strings

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "gooddate" })
export class GooddatePipe implements PipeTransform {
    month: string;
    year: number;
    day: number;
    currentYear: number;

    months = {
    "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
    "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"
    }
    transform(value: string) {
        this.year = parseInt(value.substring(0, 4));
        this.month = this.months[value.substring(5, 7)];   
        this.day = parseInt(value.substring(8, 10)); //eliminate leading zero

        let d = new Date();
        this.currentYear = d.getFullYear();
        if (this.year < this.currentYear) {
            return this.month + " " + this.year;
        } else if (this.year === this.currentYear) {
            return this.month + " " + this.day;
        } else {
            return "Error";
        }
    }
}