import { Component, OnInit, OnChanges, OnDestroy, Input, Output, SimpleChanges} from '@angular/core';
import { NgResizeObserver, ngResizeObserverProviders} from "ng-resize-observer";
import { map} from "rxjs/operators";
import { Observable } from 'rxjs'
import * as Adapters from './chart-adaptors'
import { RestApiService } from 'src/app/services/rest-api.service';
import { VisualizationTypes } from 'src/app/shared/enums/visualization-types.enum';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.less'],
  providers: [...ngResizeObserverProviders]
})

export class ChartWrapperComponent implements OnInit, OnDestroy {
  //Inputs to chart-wrapper
  @Input() vizCfg: any //this is the JSON DATA
  @Input() vizIndex: number 
  
  //Internal members for the chart object
  chart: any
  chartElement: string  = `the-chart-${new Date().getMilliseconds()}`
  width$: Observable<number>
  chartAdapter: Adapters.IChartAdapter
  
  //The data for the chart
  activeCfg: any
  activeVisualizerType: VisualizationTypes
  activeVizIdx: number

  constructor(private resize$: NgResizeObserver, private apiSvc: RestApiService) {
    this.width$ = this.resize$.pipe(map(entry => entry.contentRect.width));
  }
  

  processInboundVizCfg = (newCfg: any)=> {
    // check the Simplechanges Values
    if(newCfg.currentValue === undefined && newCfg.previousValue === undefined ){
      this.activeCfg = null
      this.activeVizIdx = null;
      return 
    }
    if(newCfg.currentValue === undefined && newCfg.previousValue != undefined ){
      this.activeCfg = null 
      this.activeVizIdx = null;
      return
    }

    //our inbound Cfg is present, so assign it
    this.activeCfg = newCfg.currentValue
    //zero out the activeVizIndex, because we just changed the activeCfg
    this.activeVizIdx = null
  }
  
  processInboundVizIndex = (newIndex: any)=> {
    // check the Simplechanges Values
    if(newIndex.currentValue === undefined && newIndex.previousValue === undefined ){
      this.activeVizIdx=null
      this.activeVisualizerType = VisualizationTypes.None
      return 
    }
    if(newIndex.currentValue === undefined && newIndex.previousValue != undefined ){
     this.activeVizIdx = null
     this.activeVisualizerType = VisualizationTypes.None
     return 
    }

    //our inbound VizIndex is present, assign it
    this.activeVizIdx = newIndex.currentValue
    this.activeVisualizerType = this.getVizType(this.activeCfg, this.activeVizIdx)
    
    if(this.activeVisualizerType === VisualizationTypes.None){
      //we have an issue and can't proced
      console.log(`Err: we are missing some data, can't proceed`)
      return
    }

    //if activeCFG is present, then process the data
    this.executeChartAdapter(this.chartElement, this.chart, this.activeCfg, this.activeVizIdx, this.activeVisualizerType)
  }
  
  executeChartAdapter(theChartElement: string, theChart:any, theActiveCfg: any, theActiveVizIdx:number, activeVizType: VisualizationTypes){
    let chartAdapter: Adapters.HorizontalBarAdapter | Adapters.VerticalBarAdapter |
                      Adapters.DualAxisHorizontalBarAdapter | Adapters.DualAxisLineAdapter |
                      Adapters.DualAxisVerticalBarAdapter | Adapters.GridAdapter | Adapters.PieMapAdapter
    return;
    switch(activeVizType){
      case VisualizationTypes.HorizontalBar:{
        chartAdapter = new Adapters.HorizontalBarAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.VerticalBar:{
        chartAdapter = new Adapters.VerticalBarAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.DualAxisHorizontalBar:{
        chartAdapter = new Adapters.DualAxisHorizontalBarAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.DualAxisLine:{
        chartAdapter = new Adapters.DualAxisLineAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.DualAxisVerticalbar:{
        chartAdapter = new Adapters.DualAxisVerticalBarAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.Grid:{
        chartAdapter = new Adapters.GridAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart()
        break;
      }
      case VisualizationTypes.Pie: {
        chartAdapter = new Adapters.PieMapAdapter(theChartElement, theActiveCfg, theActiveVizIdx)
        this.chart = chartAdapter.buildChart();
        break;
      }
    }
  }

  getVizType(activeCfg:any, activeVizIndex: number): VisualizationTypes{
    
    if(this.activeCfg === undefined){
      return VisualizationTypes.None
    }
 
    switch(activeCfg.visualizerConfig.visualizers[activeVizIndex].type){
      case "grid":{
        return VisualizationTypes.Grid
        break
      }
      case "horizontalbar":{
        return VisualizationTypes.HorizontalBar
        break
      }
      case "verticalbar":{
        return VisualizationTypes.VerticalBar
        break
      }
      case "dualaxishorizontalbar":{
        return VisualizationTypes.DualAxisHorizontalBar
        break
      }
      case "dualaxisverticalbar":{
        return VisualizationTypes.DualAxisVerticalbar
        break
      }
      case "dualaxisline":{
        return VisualizationTypes.DualAxisLine
        break
      }
      default:{
        return VisualizationTypes.None
      }
    }

  }
  ngOnInit(): void {
    
  }

  ngOnChanges(changes:SimpleChanges){
    return
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'vizCfg': {
            this.processInboundVizCfg(changes.vizCfg)
          }
          case 'vizIndex': {
            this.processInboundVizIndex(changes.vizIndex)
          }
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      console.log(`Destroying Chart: ${this.chart.id}`)
      this.chart.dispose();
    }
    this.width$
  }
}
