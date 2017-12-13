
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Candidate } from './../models/candidate';
import { Response } from '@angular/http/src/static_response';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class CandidateInfoService {


  constructor(private http: Http) { }

  getAllCandidates(): Observable<Candidate[]> {
    return this.http.get('http://localhost:56708/api/Candidate')
        .map(res =>  res.json() as Candidate[]);
  }

  saveCandiate(candidate: Candidate): Observable<any> {
      const body = JSON.stringify(candidate);
      return this.http.post('http://localhost:56708/api/Candidate/', body, options)
        .map(res => res.json() as any);
  }

  updateCandidate(candidate: Candidate): Observable<any> {
    const body = JSON.stringify(candidate);
    return this.http.put('http://localhost:56708/api/Candidate/', body, options)
      .map(res => res.json() as any);
  }

}
