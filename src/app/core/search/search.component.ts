import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { CityModel } from '../../squata/models/city.model';
import { CityService } from '../../squata/services/city.service';
import { SiteModel } from '../../squata/models/site.model';
import { SiteService } from '../../squata/services/site.service';
import { RoomModel } from '../../squata/models/room.model';
import { RoomService } from '../../squata/services/room.service';
import { PriceModel } from '../../squata/models/price.model';
import { PlaceService } from '../../squata/services/place.service';
import { PlaceModel } from '../../squata/models/place.model';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    cityList:CityModel[];
    siteList:SiteModel[];
    roomList:RoomModel[];
    priaces: PriceModel[];

    @Output()
    searchedPlaceList: EventEmitter<PlaceModel[]>=new EventEmitter<PlaceModel[]>();

    lowPriace: PriceModel= new PriceModel();
    highPriace: PriceModel= new PriceModel();
    selectedSite:SiteModel;
    selectedCity:CityModel;
    selectedRoom:RoomModel;


  constructor(private cityService:CityService,private siteService:SiteService,private roomService:RoomService,private placeService:PlaceService){
    this.cityList=[];
    this.siteList=[];
    this.roomList=[];
    this.selectedCity = new CityModel();
    this.selectedSite = new SiteModel();
    this.selectedRoom = new RoomModel();

  }

  ngOnInit(){
    this.loadCities();
    this.loadSites('a',0);
    this.loadRoomCategories();
    this.loadPrices();
  }

  loadCities(){
    this.cityService.getCity().subscribe(cities =>this.cityList = cities.json().cities)
  }

  loadSites(name?:String,city?:number){
    this.siteService.filterSite(name,city).subscribe(sites => this.siteList = sites.json().sites)
  }

  loadRoomCategories(){
    this.roomService.getAll().subscribe(rooms => this.roomList = rooms.json().rooms);
  }

  loadPrices(){
    this.priaces = [
      {name: 'R3000', countable:3000.00},
      {name: 'R2500', countable:2500.00},
      {name: 'R2000', countable:2000.00},
      {name: 'R1800', countable:1800.00},
      {name: 'R1500', countable:1500.00},
      {name: 'R1000', countable:1000.00},
      {name: 'R700', countable:700.00}
      ];
  }

  searchPlace(){
    this.placeService
    .filterPlaces(this.selectedSite.id,this.lowPriace.countable,this.highPriace.countable,this.selectedRoom.id,0)
    .subscribe(places => {
      this.searchedPlaceList.emit(places.json().places);
    });
  }

  citySelection(){
    this.siteService.filterSite('a',this.selectedCity.id).subscribe(sites => this.siteList = sites.json().sites);
  }

}
