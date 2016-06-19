import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Injectable } from "@angular/core";
import { ICamper } from "./camper";

@Injectable()
export class CampersService {
    private _30DayTop = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    private _overallTop = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    constructor(private _http: Http) { }

    get30DayCampers(): Observable<ICamper[]> {
        return this._http.get(this._30DayTop)
            .map((response: Response) => <ICamper[]>response.json())
            .do(data => console.log("30 Day Camper Leaders Loaded"))
            .catch(this.handleError);
    }
    getOverallCampers(): Observable<ICamper[]> {
        return this._http.get(this._overallTop)
            .map((response: Response) => <ICamper[]>response.json())
            .do(data=> console.log("All Time Camper Leaders Loaded"))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
    }
}