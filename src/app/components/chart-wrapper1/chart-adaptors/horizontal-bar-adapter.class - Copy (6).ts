import { map} from "rxjs/operators";
import { Observable } from 'rxjs'
import { IChartAdapter } from './chart-adapter.interface'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Am4ChartTypes } from '../../../shared/enums'
import { SerialChart, SerialChartDataItem, SeriesDataItem, LineSeries } from '@amcharts/amcharts4/charts';


/**
 * This class encapsulates the processing for a 
 * horizontal-bar visualizer
 */
export class HorizontalBarAdapter implements IChartAdapter  {
    chart: any
    series: any[]
    chartElement: string;
    activeCfg: any;
    activeVizIdx: number;
    am4ChartType: Am4ChartTypes.XY;
    //public onComplete?: (chart: any) => void
    
    constructor(theChartElement:string, theActiveCfg: any, theActiveVizIdx:number){
        this.chartElement = theChartElement
        this.series = []
        this.activeCfg = theActiveCfg
        this.activeVizIdx = theActiveVizIdx
        this.am4ChartType = Am4ChartTypes.XY
    }

    private createAxis(){

    }
    private createChartBasedOnType(theElement: string, chartType:Am4ChartTypes):
    am4charts.PieChart | am4charts.PieChart3D | am4charts.XYChart| am4charts.RadarChart|null{
    switch(chartType as Am4ChartTypes) { 
      case Am4ChartTypes.None: { 
        return null
         break; 
      } 
      case Am4ChartTypes.Pie: { 
        return am4core.create(theElement, am4charts.PieChart);
        break; 
      }
      case Am4ChartTypes.Pie3D: { 
        return am4core.create(theElement, am4charts.PieChart3D);
        break; 
      }
      case Am4ChartTypes.XY: { 
       return am4core.create(theElement, am4charts.XYChart);
       break; 
      }
      case Am4ChartTypes.Radar: { 
        return am4core.create(theElement, am4charts.RadarChart);
        break; 
       }
      default: { 
        return null
        break; 
      }  
    } 
    }
    private createSeriesBasedOnChartType(chartType: Am4ChartTypes):
    am4charts.PieSeries | am4charts.PieSeries3D | am4charts.XYSeries| am4charts.RadarSeries|null{
    switch(chartType as Am4ChartTypes){
      case Am4ChartTypes.None: { 
        return null
        break; 
      } 
      case Am4ChartTypes.Pie: { 
        return (<am4charts.PieChart>this.chart).series.push(new am4charts.PieSeries());
      break; 
      }
      case Am4ChartTypes.Pie3D: { 
        return (<am4charts.PieChart3D>this.chart).series.push(new am4charts.PieSeries3D());
        break; 
      }
      case Am4ChartTypes.XY: { 
        return (<am4charts.XYChart>this.chart).series.push(new am4charts.ColumnSeries());
        break; 
      }
      case Am4ChartTypes.XY3D: { 
        return (<am4charts.XYChart>this.chart).series.push(new am4charts.XYSeries());
        break; 
      }
      case Am4ChartTypes.Radar: { 
        return (<am4charts.RadarChart>this.chart).series.push(new am4charts.RadarSeries());
        break; 
      }
      default: { 
        return null
        break; 
      } 
    } 
    } 
  
    private loadData():any {
    const data= [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }];
    return data
    }

    public buildChart(): any{
      this.chart = this.createChartBasedOnType(this.chartElement,this.am4ChartType)
      this.chart.data = this.loadData();
      //this.series.push(this.createSeriesBasedOnChartType(this.am4ChartType))
      this.chart.hiddenState.properties.opacity = 0;
 
      let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.title.text = "Countries";
      let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Litres sold (M)";
      let series = this.chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      //this.series[0].dataFields.value = "litres";
      //this.series[0].dataFields.category = "country";
      this.chart.legend = new am4charts.Legend();
      return this.chart
    }
}