import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public profiles: PeopleService) { }

  ngOnInit(): void {

    this.getProfiles(2, 10, '');
  }

  getProfiles(offset: number, size: number, aggregate: string) {
    this.profiles.searchProfiles(offset, size, aggregate).subscribe( res => {
      console.log('res: ', res);
    })
  }

}
