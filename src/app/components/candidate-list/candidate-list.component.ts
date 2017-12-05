import { Candidate } from './../../models/candidate';
import { CandidateInfoService } from './../../services/candidate-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidateList: Candidate[];
  candidate: Candidate;
  display: boolean;
  constructor(private candidateService: CandidateInfoService ) { }

  ngOnInit() {
    this.getAllCandidates();
  }

  getAllCandidates() {
      return this.candidateService.getAllCandidates().subscribe(
          data => this.candidateList = data
      );
  }
  selectCandidate(candidate: Candidate) {
    this.candidate = candidate;
    this.display = true;
  }

}
