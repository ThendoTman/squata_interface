import { Injectable } from "@angular/core";
import { SiteModel } from "../models/site.model";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { api_uri } from "./environments";

@Injectable()
export class SiteService {
  sqt_Api:String;

    public constructor(private http: Http,private api:api_uri) {
      this.sqt_Api = this.api.base_url + "site/";
    }

  getCityById(cityId: number, page: number) {
    return this.http.get(
      this.sqt_Api +"sitesByCityId/" + cityId + "/page/" + page +'/paginator/8'
    );
  }

  filterSite(name:String,city:number){
    return this.http.get(
      this.sqt_Api +"sitesBySiteName/"+name+"/"+city
    );
  }

  getCity() {
    return this.http.get(this.sqt_Api + "city");
  }
}
