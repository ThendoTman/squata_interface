import { Injectable } from '@angular/core';
import { CityModel } from '../models/city.model';
import { Http,Headers,RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { api_uri } from './environments';
@Injectable()
export class CityService {
  headers: any;

  sqt_Api: String;

  public constructor (private http:Http,private api:api_uri){
    this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Access-Control-Allow-Headers','*');
    // this.headers.append('Access-Control-Allow-Origin','*');
    this.headers.append('Allow', 'GET, POST, OPTIONS');
    this.sqt_Api = this.api.base_url;
  }

 getCityById(id: number): Observable<CityModel> {
      return null;
    }

  getCity(){
    const options = new RequestOptions({headers: this.headers});
    return this.http.get(this.sqt_Api+"city");
  }
}
