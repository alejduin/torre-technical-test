import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { ProfileDetail } from '../../core/models/profile.models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

/**
 * Contacts-profile component
 */
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  public persona: ProfileDetail;
  public error = '';
  public username: string;

  constructor(
    public people: PeopleService,
    public router: Router,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('user');
    console.log('username: ', this.username);
    // this.route.queryParams.subscribe(params => {
    //   this.username = params.get('user');
    //   console.log('username: ', this.username);
    //   this.showPeopleDetail(this.username);
    // });

    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'Profile', active: true }];

  }

  public showPeopleDetail(alias: string){
    this.people.getPeopleDetail(alias).subscribe(res => {
      this.persona = {
        person: {
          professionalHeadline: res.person.professionalHeadline,
          picture: res.person.picture,
          name: res.person.name,
          location: {
            country: res.person.location.country
          },
          summaryOfBio: res.person.summaryOfBio
        },
        interests: res.interests,
        jobs: res.jobs,
        education: res.education,
        languages: res.languages
      }
      console.log('persona: ', this.persona);
    });
  }

}
