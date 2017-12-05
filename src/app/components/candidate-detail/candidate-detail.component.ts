import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from './../../models/candidate';


@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input("candidate") candidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

}
