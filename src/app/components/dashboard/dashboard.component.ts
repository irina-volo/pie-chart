import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { VisualizerConfigs } from '../../shared/enums'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public vizIndex:number 
  public vizCfg: any
  constructor(private apiSvc: RestApiService) { 
  }

  ngOnInit(): void {
    this.apiSvc.getVisualizerConfig(VisualizerConfigs.Pie).subscribe(data => {
      this.vizCfg = data
      this.vizIndex = 0
    });
  }

}
