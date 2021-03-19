import { Component, OnInit } from '@angular/core';

import { OpportunityService } from '../../core/services/opportunity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {

  public opportunityData;
  public test: any;

  constructor(
    public opportunity: OpportunityService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.xgetOportunities(0, 10, '');
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
    });

  }

  public goToOpportunity(opportunityId: string){
    this.router.navigate(['/opportunity', opportunityId]);
  }

  public goToMember(username: string) {
    this.router.navigate(['/profile', username]);
  }

}
