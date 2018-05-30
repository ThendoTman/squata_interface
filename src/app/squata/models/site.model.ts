import { CityModel } from "./city.model";

export class SiteModel {
  id: number;
  name: string;
  picture: string;
  view:number;
  city:CityModel;
}
