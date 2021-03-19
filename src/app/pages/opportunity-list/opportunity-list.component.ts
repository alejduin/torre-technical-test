import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/opportunity.models';

import { opportunityData } from './projetctData';
import { OpportunityService } from '../../core/services/opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {

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
        objective: results.objective,
        organizations: results.organizations,
        locations: results.locations,
        members: results.members
      }));
      console.log('test: ', this.test);

    });

  }

}
