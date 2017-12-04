import { Favorites } from 'app/models/favorites';

export class Candidate {
  id: number;
  Name: string;
  Dob: Date;
  Gender: string;
  FavoriteCollection: Favorites[];
}



