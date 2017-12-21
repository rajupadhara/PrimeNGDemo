import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Candidate } from 'app/models/candidate';
import { Response } from './../models/response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CandidateInfoService {
  webApiUri: string = 'http://localhost:56708/api/Candidate';

  constructor(private http: HttpClient) { }

  getAllCandidates() {
    // return this.http.get(this.webApiUri)
    //     .map(res =>  res.json() as Candidate[]);

      return this.http.get<Candidate[]>(this.webApiUri);
  }

  saveCandiate(candidate: Candidate) {
      const body = JSON.stringify(candidate);
      return this.http.post<Response>(this.webApiUri, body, httpOptions);
  }

  deleteCandiate(id: number) {
    return this.http.delete<Response>(this.webApiUri + '/' + id);
  }
}
