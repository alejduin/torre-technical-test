import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { ProfileDetail } from '../../core/models/profile.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  public persona: ProfileDetail;
  public error = '';
  public username: string;

  constructor(
    public people: PeopleService,
    public router: Router,
    public route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => {
        this.username = params.user;
      });
    }
    
  ngOnInit() {
    this.showPeopleDetail(this.username);
  }

  public showPeopleDetail(a: string){
    this.people.getPeopleDetail(a).subscribe(res => {
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
        languages: res.languages,
        experiences: res.experiences
      }
    });
  }

}
