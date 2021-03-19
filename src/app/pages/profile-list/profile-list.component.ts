import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { ProfileList } from '../../core/models/profile.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public perfiles: ProfileList;
  public profileTemp: any;
  public peopleTemp: any;
  public directionData = [];

  constructor(
    public people: PeopleService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.xgetProfiles(0, 10, '');
  }

  public xgetProfiles(offset: number, size: number, aggregate: string) {
    this.people.searchProfiles(offset, size, aggregate).subscribe( res => {
      this.profileTemp = res.results.map(results => ({ 
        name: results.name,
        username: results.username,
        picture: results.picture,
        professionalHeadline: results.professionalHeadline,
        location: results.locationName,
        skills: results.skills
      }));
    });
  }

  public redirect(a: string){
    this.router.navigate(['/profile', a]);
  }

}
