import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OpportunityService } from '../../core/services/opportunity.service';
import { ProjectDetails } from '../../core/models/opportunity.models';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss'],
})

export class OpportunityComponent implements OnInit {
  public opport: ProjectDetails;
  public error = '';
  public jobId: string;

  constructor(
    public opportunity: OpportunityService,
    public router: Router,
    public route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => {
        this.jobId = params.job;
      });
    }

  ngOnInit() {
    this.showOpportunityDetail(this.jobId);
  }



  public showOpportunityDetail(a: string){
    this.opportunity.getOpportunityDetail(a).subscribe(res => {
      this.opport = {
        id: res.id,
        organization: res.organizations,
        objective: res.objective,
        attachments: res.attachments,
        serpTags: res.serpTags,
        details: res.details,
        strengths: res.strengths
      }
    });
  }

}
