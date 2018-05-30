import { Component, OnInit,Input } from '@angular/core';
import { CityModel } from '../models/city.model';
import { PlaceModel } from '../models/place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @Input() cityList:CityModel[];
  @Input() placeList:PlaceModel[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  selectCitySites(city) {
    this.router.navigate(["/home/site/list/", city.id]);
  }
  gotoDetails(place){
    this.router.navigate(["/home/place/", place.id]);
}
}
