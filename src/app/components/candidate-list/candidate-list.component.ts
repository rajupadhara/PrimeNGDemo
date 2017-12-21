import { Component, OnInit } from '@angular/core';
import { Favourite } from 'app/models/favourite';
import { Candidate } from 'app/models/candidate';

import { CandidateInfoService } from 'app/services/candidate-info.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidateList: Candidate[];
  candidate: Candidate;

  constructor(private candidateService: CandidateInfoService,
              private confirmationService: ConfirmationService ) { }

  ngOnInit() {
    this.getAllCandidates();
    console.log(this.candidateList );
  }

  getAllCandidates() {
    this.candidateService.getAllCandidates().subscribe(
      data => {
        this.candidateList = data
      }
    );
  }

  selectCandidate(candidate: Candidate) {
    this.candidate = candidate;
  }

  deleteCandidate(candidate: Candidate) {
    this.confirmationService.confirm({
      message: 'Are you sure to delete this record?',
      accept: () => {
          this.candidateService.deleteCandiate(candidate.id).subscribe(
            data => {
                if (data.success) {
                    this.candidateList = this.candidateList.filter(c => c !== candidate);
                }
            }
        );
      }
    });
  }

  addNewCandidate() {
      this.candidate = new Candidate();
      this.candidate.favouriteCollection = [];
  }

  saveCandidate(candidate: Candidate) {
    console.log('save parent trigger');
    this.candidateList.push(candidate);
    // this.candidateList.push( {
    //     favouriteCollection : candidate.favouriteCollection,
    //     id : candidate.id,
    //     name : candidate.name,
    //     dob : candidate.dob,
    //     gender: candidate.gender
    // });
    this.candidate = null;
  }

  closeDialogForm() {
      this.candidate = null;
  }

}
