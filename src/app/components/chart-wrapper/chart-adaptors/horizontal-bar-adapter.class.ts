import { map} from "rxjs/operators";
import { Observable } from 'rxjs'
import { IChartAdapter } from './chart-adapter.interface'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Am4ChartTypes, VizSectionsOfInterest } from '../../../shared/enums'
import {IBar} from '../../../shared/interfaces/visual-configs/bar.interface'
import { SerialChart, SerialChartDataItem, SeriesDataItem, LineSeries, XYChart } from '@amcharts/amcharts4/charts';

/**
 * This class encapsulates the processing for a 
 * horizontal-bar visualizer
 */
export class HorizontalBarAdapter implements IChartAdapter  {
    chart: am4charts.XYChart  // both HorizontalBar and VerticalBar use this chart type
    chartElement: string
    activeCfg: IBar
    activeVizIdx: number
    am4ChartType: Am4ChartTypes
    
    constructor(theChartElement:string, theActiveCfg: any, theActiveVizIdx:number){
        this.chartElement = theChartElement
        this.activeCfg = <IBar>theActiveCfg
        this.activeVizIdx = theActiveVizIdx
        this.am4ChartType = Am4ChartTypes.XY
    }
      
    public buildChart(): any{
      let modifiedAxisData:any   
      let entireVisualizer = this.loadData(VizSectionsOfInterest.entireVizualizer)   
      
      /*STEP-1: Create the local chart object (this.chart) using a specific AMCHART TYPE to accomodate
        a Horizontal-BAR.  Also specify the DOM element to target */
      this.chart = am4core.create(this.chartElement, am4charts.XYChart);

      /*STEP-2.1: Create the Y Axis (CategoryAxis) object to hold Categories.  */
      var categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
      
      /*STEP-2.2: Create the data object that gets assigned to the CategoryAxis */
      categoryAxis.data = this.createCategoryAxisData(this.loadData(VizSectionsOfInterest.dataSeriesOrverRides))
     
      /*STEP-2.3: Set some properties to configure CategoryAxis*/ 
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;

      /*STEP-3.1: C Create the X Axis (ValueAxis) object to hold Values */ 
      let valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
      
      /*STEP-3.2: Create the chart Data */
      let chartData = this.createChartData(this.loadData(VizSectionsOfInterest.chartData), categoryAxis.data);
      
      console.log (chartData)

      /*STEP-4: Create the Series from the data */
      for (var item of chartData){
        let series = this.createSeries(item);  
      }

      /*STEP-5: Build the remaining chart */
      this.bldTitle()

      return this.chart
    }
    
   
    createDeepCopy(sourceObj:any):any{
      return JSON.parse(JSON.stringify(sourceObj));
    }

    createChartData(chartData:any, categoryAxisData:any):any[] {
      let newObj = this.createDeepCopy(chartData)
    
      for (var item of categoryAxisData){
        for(var item2 of newObj){
          if(item.id === item2.uid){
              item2.bin.map(x=> x.category = item.category)
          }
        }
      }
      return newObj;
    }

    createSeries(data: any) {
      var series = this.chart.series.push(new am4charts.ColumnSeries3D());
      series.data = data.bin;
      series.dataFields.categoryY = "category";
      series.dataFields.valueX = "val";
      series.name = "need to fill this in";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.tooltipText = "{valueX}";
      series.columns.template.column3D.stroke = am4core.color("#fff");
      series.columns.template.column3D.strokeOpacity = 0.2;
      return series
    }

    createCategoryAxisData(overRideSeries:any[]):any[]{
      let objDC = this.createDeepCopy(overRideSeries)
      let retVal: any[] = []

      for (var item of objDC) {
        let obj: any = {}
        obj.id = item.label
        obj.category = item.tuple.members[0].name
        retVal.push(obj)
      }
      return retVal
    }  

    loadData(vizSection:VizSectionsOfInterest):any {
      switch (vizSection){
        case VizSectionsOfInterest.None: { 
          return null
          break; 
        } 
        case VizSectionsOfInterest.chartData: { 
          return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].chartData
          break; 
        }
        case VizSectionsOfInterest.dataSeriesOrverRides: { 
          return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].dataSeries.overRideSeries
          break; 
        } 
        case VizSectionsOfInterest.entireVizualizer: { 
          return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx]
          break; 
        } 
      }
      return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].chartData
    }
    
    //Chart Building Functions
    bldChartArea() {
    }

    bldGridLinesConfig() {
    }
    bldTitle() {
      let title = this.chart.titles.create();
      title.text = this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].title.text === "" ? "Title Left Blank":this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].title.text
      title.fontSize = this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].title.fontSize
    }
    bldCaption() {
    }
}