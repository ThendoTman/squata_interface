import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api_uri } from './environments';

@Injectable()
export class RoomService{
  sqt_Api:String;

  public constructor (private http:Http,private api:api_uri){
     this.sqt_Api = this.api.base_url+'site/'
  }

  getAll()
  {
   return this.http.get(this.sqt_Api+"room/types");
  }
}
