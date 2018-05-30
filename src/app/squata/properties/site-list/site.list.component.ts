import { Component, OnInit } from '@angular/core';
import { SiteModel } from '../../models/site.model';
import { SiteService } from '../../services/site.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ms-site-list',
  templateUrl: './site.list.component.html',
  styleUrls: ['./site.list.component.scss']
})
export class SiteListComponent implements OnInit{

  siteList:SiteModel[];
  selectedId:number;
  pages:number[];
  pageCount:number;
  page:number;
  city:string;
  constructor(private siteService: SiteService,private activeRoute: ActivatedRoute,private router:Router){
    this.pages=[];
    this.page=0;
    this.city="";
  }

  ngOnInit() {
    this.loadSites();
  }

  loadSites(){
    this.selectedId = +this.activeRoute.snapshot.paramMap.get('id');

    this.siteService.getCityById(this.selectedId,0).subscribe(sites =>{
      this.siteList = sites.json().sites;
      this.pageCount = sites.json().pages;
      this.city=sites.json().sites[0].city.name;
      for(let i=0;i<sites.json().pages;i++){
        this.pages.push(i+1);
      }
    });
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
    this.siteService.getCityById(this.selectedId,this.page-1).subscribe(sites =>{
      this.siteList = sites.json().sites;
    });
  }

  gotoPlaces(site){
    this.router.navigate(["/home/place/list/", site.id]);
  }
}
