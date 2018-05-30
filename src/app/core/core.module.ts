import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GrowlModule, DropdownModule } from "primeng/primeng";
import { AdminComponent } from "./admin/admin.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";

/** external ***/
import {BrowserModule} from '@angular/platform-browser';

/*** Squata Components ***/
import { HomeComponent } from "../squata/home/home.component";
import { AboutComponent } from "../squata/about/about.component";
import { ContactComponent } from "../squata/contact/contact.component";
/*** Properties***/
import { SiteListComponent } from "../squata/properties/site-list/site.list.component";
import { PlaceDetailsComponent } from "../squata/properties/place-details/place.details.component";
import { PlaceListComponent } from "../squata/properties/place-list/place.list.component";

/**Services**/
import { CityService } from "../squata/services/city.service";
import { PlaceService } from "../squata/services/place.service";
import { SiteService } from "../squata/services/site.service";
import { api_uri } from "../squata/services/environments";
import { RoomService } from "../squata/services/room.service";
import { IndexComponent } from "../squata/index/index.component";
import { SearchedComponent } from "../squata/searched/searched.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    GrowlModule,
    DropdownModule

  ],
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    NavComponent,
    IndexComponent,SearchedComponent,
    /** Squata Compoenets**/
    HomeComponent,
    AboutComponent,
    ContactComponent,
    /***Properties ***/
    SiteListComponent,
    PlaceDetailsComponent,
    PlaceListComponent
  ],
  providers: [CityService,PlaceService,SiteService,RoomService,api_uri]
})
export class CoreModule {}
