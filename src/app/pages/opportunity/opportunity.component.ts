import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/opportunity.models';

import { opportunityData } from '../opportunity/projetctData';
import { OpportunityService } from '../../core/services/opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  public opportunityData;
  public test: any;

  constructor(public opportunity: OpportunityService) { }

  ngOnInit(): void {
    this.opportunityData = opportunityData;
    this.xgetOportunities(2, 10, '');
  }

  public xgetOportunities(offset: number, size: number, aggregate: string) {
    this.opportunity.searchOportunities(offset, size, aggregate).subscribe( res => {
      this.test = res.results.map(results => ({ 
        id: results.id,
        organizations: [{
          id: results.organizations.id,
          name: results.organizations.name,
          picture: results.organizations.picture
        }],
        locations: [],
        members: [{
            subjectId: results.members.subjectId,
            name: results.members.name,
            username: results.members.username,
            professionalHeadline: results.members.professionalHeadline,
            picture: results.members.picture
        }]
      }));
      console.log('test: ', this.test);

    });

  }

}
