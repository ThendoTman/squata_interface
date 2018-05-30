import { Component, OnInit, Input } from '@angular/core';
import { PlaceModel } from '../models/place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.scss']
})
export class SearchedComponent implements OnInit {

  @Input() searchPlacesList:PlaceModel[];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoDetails(place){
    this.router.navigate(["/home/place/", place.id]);
}
}
