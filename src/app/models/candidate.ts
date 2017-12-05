import { Favourite } from 'app/models/favourite';


export class Candidate {
  id: number;
  Name: string;
  Dob: Date;
  Gender: string;
  FavouriteCollection: Favourite[];
}



