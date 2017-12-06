import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from './../../models/candidate';
import { Favourite } from './../../models/favourite';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input('candidate') candidate: Candidate;
  favouriteList: Array<Favourite> = [];

  constructor() { }

  ngOnInit() {
  }

  addFavourite() {
    this.favouriteList.push(new Favourite());
  }

  saveCandidateInfo() {
    console.log(this.candidate);
    console.log(this.favouriteList);
  }

}
