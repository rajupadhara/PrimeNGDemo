import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from 'app/models/candidate';
import { Favourite } from 'app/models/favourite';
import { Gender } from 'app/models/gender';

import { CandidateInfoService } from 'app/services/candidate-info.service';


@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input('candidate') candidate: Candidate;
  @Output() closeDialogEvent= new EventEmitter();

  selectedGender: Gender;
  genderList: Gender[] ;
  display: boolean;
  constructor(private candidateService: CandidateInfoService) {
  }

  ngOnInit() {
    this.genderList = [
      { code: 'M', name: 'Male'},
      { code: 'F', name: 'Female'}
    ];
    this.display = true;

    if ( this.candidate.id > 0 ) {
      const item: Gender = this.genderList.find( f => f.code === this.candidate.gender );
      this.selectedGender = item;
      console.log(this.genderList);
    } else {
      this.selectedGender = this.genderList[0];
    }
  }

  addFavourite() {
    console.log(this.candidate.favouriteCollection);
    this.candidate.favouriteCollection.push({favKey: '', favValue: ''});
  }

  getDOB(event) {
     // const d = new Date(Date.parse(event));
     // const myDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
     // const newDate = new Date(myDate);
     this.candidate.dob = event;
  }

  saveCandidateInfo() {
    this.candidate.gender = this.selectedGender.code;
    const response = this.candidateService.saveCandiate(this.candidate).subscribe(
        data => console.log(data)
    );
  }

  deleteFavourite(favourite: Favourite) {
      console.log('delete favourite');
      console.log(favourite);

      const favIndex =  this.candidate.favouriteCollection.indexOf(favourite);
      if (favIndex >= 0) {
            this.candidate.favouriteCollection.splice(favIndex, 1);
      }
  }

  closeFormDialog() {
      this.display = false;
      this.closeDialogEvent.emit();
  }


}
