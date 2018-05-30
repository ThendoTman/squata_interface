import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./core/admin/admin.component";
import {HomeComponent } from "./squata/home/home.component"
import {AboutComponent } from "./squata/about/about.component"
import {ContactComponent } from "./squata/contact/contact.component"
/** Properties***/
import {SiteListComponent } from "./squata/properties/site-list/site.list.component";
import { PlaceDetailsComponent } from "./squata/properties/place-details/place.details.component";
import { PlaceListComponent } from "./squata/properties/place-list/place.list.component";

/**prevent 404 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { breadcrumb: 'Home' }
  },

  {
    path: 'home',
    component: AdminComponent,
    children: [

      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'site/list/:id',
        component: SiteListComponent,
      },
      {
        path: 'place/list/:id',
        component: PlaceListComponent,
      },
      {
        path: 'place/:id',
        component: PlaceDetailsComponent,
      },
    ]
  }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
