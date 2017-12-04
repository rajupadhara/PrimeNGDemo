
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Candidate } from './../models/candidate';

@Injectable()
export class CandidateInfoService {

  constructor(private http: Http) { }

  getAllCandidates(): Observable<Candidate[]> {
    return this.http.get('http://localhost:49793/api/Candidate')
        .map(res => res.json() as Candidate[])
  }

}
