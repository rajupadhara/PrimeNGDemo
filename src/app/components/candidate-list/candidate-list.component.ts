import { Component, OnInit } from '@angular/core';
import { Favourite } from 'app/models/favourite';
import { Candidate } from 'app/models/candidate';

import { CandidateInfoService } from 'app/services/candidate-info.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidateList: Candidate[];
  candidate: Candidate;

  constructor(private candidateService: CandidateInfoService ) { }

  ngOnInit() {
    this.getAllCandidates();
    console.log(this.candidateList );
  }

  getAllCandidates() {
    return this.candidateService.getAllCandidates().subscribe(
        data => this.candidateList = data
    );
  }

  selectCandidate(candidate: Candidate) {
    this.candidate = candidate;
  }

 addNewCandidate() {
    this.candidate = new Candidate();
    this.candidate.favouriteCollection = [];
 }

 closeDialogForm() {
    this.candidate = null;
 }

}
