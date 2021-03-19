import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private searchOpportunitiesURL = '/opportunities/_search/';
  private opportunityURL = '/api/opportunities/';

  constructor(private http: HttpClient) { }

  getOpportunityDetail(term: string): Observable<any> {
    term = term.trim();
    const personUrl = `${this.opportunityURL}${term}`;
    return this.http.get(personUrl);
  }

  searchOportunities(offset: number, size: number, aggregate: string): Observable<any> {
    var data = {offset: offset, size: size, aggregate: aggregate};
    const searchUrl = `${this.searchOpportunitiesURL}`;
    return this.http.post(searchUrl, data);
  }
}
