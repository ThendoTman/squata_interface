import { Component, OnInit } from '@angular/core';
import { CityModel } from '../models/city.model';
import { CityService } from '../services/city.service';
import { PlaceModel } from '../models/place.model';
import { PlaceService } from '../services/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  cityList:CityModel[];
  placeList:PlaceModel[];
  searchedPlaceList:PlaceModel[];
  searched:boolean;
    constructor(private cityService: CityService,private placeService:PlaceService,private router: Router){
      this.searchedPlaceList = [];
      this.searched =false;
    }

    ngOnInit() {
      this.loadCities();
      this.loadLatestPlaces();
    }

    loadCities(){
      this.cityService.getCity().subscribe(cities =>this.cityList = cities.json().cities)
    }

    loadLatestPlaces(){
      this.placeService.getLatest().subscribe(places =>{
        this.placeList = places.json().places;
      })
    }

    searchPlaces(places){
      // console.log(places);
      this.searchedPlaceList = places;
      this.searched=true;
    }
}
