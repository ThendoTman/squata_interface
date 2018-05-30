import { Component, OnInit } from "@angular/core";
import { PlaceService } from "../../services/place.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PlaceModel } from "../../models/place.model";

@Component({
  selector: "ms-place-details",
  templateUrl: "./place.details.component.html",
  styleUrls: ["./place.details.component.scss"]
})
export class PlaceDetailsComponent implements OnInit {
  place: PlaceModel;
  selectedId: number;

  constructor(
    private placeService: PlaceService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.place = new PlaceModel();
  }

  ngOnInit() {
    this.loadPlace();
  }

  loadPlace() {
    this.selectedId = +this.activeRoute.snapshot.paramMap.get("id");
    this.placeService
      .getPlace(this.selectedId)
      .subscribe(places => (this.place = places.json().place));
  }
}
