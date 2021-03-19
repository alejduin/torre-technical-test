import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { Profile } from '../../core/models/profile.models';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public perfiles: Profile;
  public test: any;
  public directionData = [];

  constructor(public people: PeopleService) { }

  ngOnInit(): void {
    this.xgetProfiles(2, 10, '');
  }

  getProfiles(offset: number, size: number, aggregate: string) {
    this.people.searchProfiles(offset, size, aggregate).subscribe( res => {
      console.log('res: ', res);
    })
  }

  public xgetProfiles(offset: number, size: number, aggregate: string) {
    this.people.searchProfiles(offset, size, aggregate).subscribe( res => {
      this.test = res.results.map(results => ({ 
        name: results.name,
        username: results.username,
        picture: results.picture,
        professionalHeadline: results.professionalHeadline
      }));
      console.log('test: ', this.test);

    });

  }

}
