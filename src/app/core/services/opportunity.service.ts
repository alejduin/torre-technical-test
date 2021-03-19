import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private searchOpportunitiesURL = '/opportunities/_search/';

  constructor(private http: HttpClient) { }

  searchOportunities(offset: number, size: number, aggregate: string): Observable<any> {
    var data = {offset: offset, size: size, aggregate: aggregate};
    const searchUrl = `${this.searchOpportunitiesURL}`;
    return this.http.post(searchUrl, data);
  }
  
}
