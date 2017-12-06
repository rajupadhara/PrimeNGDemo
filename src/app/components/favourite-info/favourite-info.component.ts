import { Component, OnInit, Input } from '@angular/core';
import { Favourite } from 'app/models/favourite';

@Component({
  selector: 'app-favourite-info',
  templateUrl: './favourite-info.component.html',
  styleUrls: ['./favourite-info.component.css']
})
export class FavouriteInfoComponent implements OnInit {
  @Input('favourite') favourite: Favourite;

  constructor() { }

  ngOnInit() {
  }

}
