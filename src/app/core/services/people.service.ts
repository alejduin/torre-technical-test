import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleURL = '/api/bios/';
  private searchProfileURL = '/people/_search/';

  constructor(private http: HttpClient) { }

  getPeopleDetail(term: string): Observable<any> {
    term = term.trim();
    const personUrl = `${this.peopleURL}${term}`;
    return this.http.get(personUrl);
  }

  searchProfiles(offset: number, size: number, aggregate: string): Observable<any> {
    var data = {offset: offset, size: size, aggregate: aggregate};
    const searchUrl = `${this.searchProfileURL}`;
    return this.http.post(searchUrl, data);
  }
}
