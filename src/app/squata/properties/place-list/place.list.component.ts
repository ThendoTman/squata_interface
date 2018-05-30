import { Component, OnInit } from '@angular/core';
import { PlaceModel } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ms-place-list',
  templateUrl: './place.list.component.html',
  styleUrls: ['./place.list.component.scss']
})
export class PlaceListComponent  implements OnInit{

  placeList:PlaceModel[];
  selectId:number;
  pages:number[];
  pageCount:number;
  page:number;
  constructor(private placeService:PlaceService,private router: Router,private activeRoute: ActivatedRoute,){
    this.page=0;
    this.pageCount=0;
    this.pages=[];
  }


  ngOnInit() {
    this.loadPlaces();
  }


  loadPlaces(){
    this.selectId = +this.activeRoute.snapshot.paramMap.get('id');

    this.placeService.getplaceBysite(this.selectId,0).subscribe(places =>{
      this.placeList = places.json().places;
      this.pageCount = places.json().pages;
      for(let i=0;i<places.json().pages;i++){
        this.pages.push(i+1);
      }
    })
  }
  gotoPage(page){
    this.page =page;
    this.pagination();
  }

  gotoPrevius(){
    (this.page <= 1)? this.page=1 : this.page--;
    this.pagination();
  }

  gotoNext(){
    (this.page >= this.pageCount)?this.page=this.pageCount:this.page++;
    this.pagination();
  }

  pagination(){
    this.placeService.getplaceBysite(this.selectId,this.page-1).subscribe(places =>{
      this.placeList = places.json().places;
    });
  }
  gotoDetails(place){
      this.router.navigate(["/home/place/", place.id]);
  }
}
