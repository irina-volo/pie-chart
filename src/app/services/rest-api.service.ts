import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Observable, of, pipe, forkJoin, from } from 'rxjs'
import { VisualizationTypes, VisualizerConfigs } from '../shared/enums';
import { IBar,IColumn,IDualAxisBar,
         IDualAxisColumn, IDualAxisLine,
         IStackedBar, IStackedColumn } from  '../shared/interfaces/visual-configs'
import *  as barJson from '../../assets/mock-data/visualization-json/Bar.json'         
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) {

  }

  public  getVisualizerConfig(vizCfg: VisualizerConfigs): Observable<any> {
    switch (vizCfg) {
      case VisualizerConfigs.None: {
        return null;
        break;
      }
      case VisualizerConfigs.Bar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/Bar.json')
      }
      case VisualizerConfigs.Column: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/Column.json')
      }
      case VisualizerConfigs.DualAxisBar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisBar.json')
      }
      case VisualizerConfigs.DualAxisColumn: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisColumn.json')
      }
      case VisualizerConfigs.DualAxisLine: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisLine.json')
      }
      case VisualizerConfigs.StackedBar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/StackedBar.json')
      }
      case VisualizerConfigs.StackedColumn: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/StackedColumn.json')
      }
      case VisualizerConfigs.Pie: {
     //   return this.httpClient.get('../../assets/mock-data/visualization-json/Pie.json')
        const treeMapApiUrl =
          'https://qa-unify.liquiddata.cloud/LD_QA/reports/loadReport/99c7bd80be64067f:-4bc09fc7:1758c2dbf5a:1d51'
        const headers = { Authorization: 'Basic enA4MDE6SXJpZ2xvYmFsMTI=' }
        const body = { requestType: 1 }
        return this.httpClient.post<any>(treeMapApiUrl, body, { headers })
      }
      case VisualizerConfigs.TreeMap: {
        const treeMapApiUrl =
          'https://clicktime.symantec.com/3QP7tTWUbkgZXmc2ADSaFxp7Vc?u=https%3A%2F%2Fqa-unify.liquiddata.cloud%2FLD_QA%2Freports%2FloadReport%2F8ff2cd7b113097de%3A-b481feb%3A1759428d4a6%3A-3a14'
        const headers = { Authorization: 'Basic enA4MDE6SXJpZ2xvYmFsMTI=' }
        const body = { requestType: 1 }
        return this.httpClient.post<any>(treeMapApiUrl, body, { headers })
      }
    }
  }
}
