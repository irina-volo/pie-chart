import { Component, OnInit, Input } from '@angular/core';
import { NgResizeObserver, ngResizeObserverProviders } from "ng-resize-observer";
import { Observable } from 'rxjs'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { RestApiService } from '../../services/rest-api.service';
import { VisualizerConfigs } from '../../shared/enums'

@Component({
  selector: 'app-chart-wrapper1',
  templateUrl: './chart-wrapper1.component.html',
  styleUrls: ['./chart-wrapper1.component.scss'],
  providers: [...ngResizeObserverProviders]
})
export class ChartWrapperAComponent implements OnInit {
  //Inputs to chart-wrapper
  @Input() vizCfg: any; //this is the JSON DATA
  @Input() vizIndex: number;

  width$: Observable<number>;

  constructor(private resize$: NgResizeObserver, private restApiService: RestApiService) {
    //;;;this.width$ = this.resize$.pipe(map(entry => entry.contentRect.width));
  }

  ngOnInit() {
    this.restApiService.getVisualizerConfig(VisualizerConfigs.Pie).subscribe(data => {
      this.vizCfg = data
      this.vizIndex = 0

      const visualizer =this.vizCfg.report.visualizerConfig.visualizers[0];
      let chartDataTemp = visualizer.chartData[0].bin;
      console.log('--------------------0', chartDataTemp);
      let legend = visualizer.chartLayout.legend;
      console.log('--------------------1', legend);
      let members = this.vizCfg.report.gridMemberDefs[0].members;
      console.log('--------------------2', members);
      let chartData = [];
      const count = chartDataTemp.length;
      for(let i = 0; i < count; i++) {
        let item = chartDataTemp[i];
        const record =  members.find( m => m.uid === legend[i][0]);
        chartData.push(
          {
            value: item["fmtdval"],
            name: record.name
          }
        );
      }
      console.log('--------------------3', chartData);
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4charts.PieChart);

      // this makes initial fade in effect
      chart.hiddenState.properties.opacity = 0;
      chart.data = chartData;
      chart.colors.step = 1;

      // define data fields
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "name";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeOpacity = 1;

      chart.legend = new am4charts.Legend();
      chart.legend.useDefaultMarker = true;
      let marker = chart.legend.markers.template.children.getIndex(0);
      //marker.cornerRadius(12, 12, 12, 12);
      marker.strokeWidth = 2;
      marker.strokeOpacity = 1;
      marker.stroke = am4core.color("#ccc");

      // chart.dataFields.value = "fmtdval";
      //  chart.dataFields.name = "uid";
      //  chart.dataFields.children = "bin";

      /*  chart.data = [{
          "country": "Lithuania",
          "litres": 501.9
        }, {
          "country": "Czechia",
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
        }
        ];
  */
      // Add and configure Series
      //  let pieSeries = chart.series.push(new am4charts.PieSeries());
      //   pieSeries.dataFields.value = "litres";
      //   pieSeries.dataFields.category = "country";
      //   pieSeries.slices.template.stroke = am4core.color("#fff");
      //  pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.hiddenState.properties.radius = am4core.percent(0);
    });

  }
}
