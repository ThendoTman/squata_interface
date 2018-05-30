import { Injectable } from '@angular/core';
// import { SiteModel } from '../models/sites/site.model';
import { PlaceModel } from '../models/place.model';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import { api_uri } from './environments';

@Injectable()
export class PlaceService {

  sqt_Api:String;

      public constructor (private http:Http,private api:api_uri){
        this.sqt_Api = this.api.base_url+'place/'
    }

    getplaceBysite(id: number,page:number)
    {
      return this.http.get(this.sqt_Api+"placeBySiteId/"+id+"/page/"+page+'/paginator/4');
    }

  getPlace(id: number) {
    return this.http.get(this.sqt_Api+"id/"+id);
  }

  getLatest() {
    return this.http.get(this.sqt_Api+"latest/get");
  }
  getPlaceByFilter(filter: string,site:number,page:number){
    return this.http.get(this.sqt_Api+"place/placeByfilter/"+filter+"/site/"+site+"/page/"+page)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable
      .throw('system down'));
  }

  filterPlaces(site?:number,low_price?:number,high_price?:number,category?:number,page?:number){

    return this.http.get(this.sqt_Api+"placeByfilter/"+site+"/"+low_price+"/"+high_price+"/"+category+"/page/"+page);
  }

}
/*
enc
accounting
economics :passed
applied economics: failed
financial accounting : failed
Quantitative techniques:failed
stats

*/
