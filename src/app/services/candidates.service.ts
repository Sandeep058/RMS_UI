import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../Model/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getallCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.baseApiUrl + '/api/Candidate');
  }

  AddCandidates(addCandidateRequest: Candidate): Observable<Candidate> {
    addCandidateRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Candidate>(this.baseApiUrl + '/api/Candidate/', addCandidateRequest);
  }

  getCandidate(id: string): Observable<Candidate>{
    return this.http.get<Candidate>(this.baseApiUrl + '/api/candidate/' + id);
  }

  updateCandidate(id: string, updateCandidateRequest: Candidate): Observable<Candidate>{
    return this.http.put<Candidate>(this.baseApiUrl + '/api/candidate/' + id, updateCandidateRequest);
  }

  deleteCandidate(id: string): Observable<Candidate>{
    return this.http.delete<Candidate>(this.baseApiUrl + '/api/candidate/' + id);
  }
}

