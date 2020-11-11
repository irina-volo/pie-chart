import { IChartAdapter } from './chart-adapter.interface';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Am4ChartTypes, VizSectionsOfInterest } from '../../../shared/enums';
import { ITreeMap } from '../../../shared/interfaces/visual-configs';

/**
 * This class encapsulates the processing for a 
 * tree-map visualizer
 */
export class TreeMapAdapter implements IChartAdapter {
  chart: am4charts.TreeMap  // For TreeMap Charts
  chartElement: string;
  activeCfg: ITreeMap;
  activeVizIdx: number;
  am4ChartType: Am4ChartTypes;
  customProperties: any = {};

  constructor(theChartElement: string, theActiveCfg: any, theActiveVizIdx: number) {
    this.chartElement = theChartElement;
    this.activeCfg = <ITreeMap>theActiveCfg;
    this.activeVizIdx = theActiveVizIdx;
    this.am4ChartType = Am4ChartTypes.TreeMap;
  }

  public buildChart(): any {
    this.chart = am4core.create(this.chartElement, am4charts.TreeMap);
    let chartData = this.loadData(VizSectionsOfInterest.chartData);

    // this makes initial fade in effect
    this.chart.hiddenState.properties.opacity = 0;
    this.chart.data = chartData;
    this.chart.colors.step = 1;

    this.customProperties = this.getCustomProperties();

    // define data fields
    this.chart.dataFields.value = "fmtdval";
    this.chart.dataFields.name = "uid";
    this.chart.dataFields.children = "bin";

    this.chart.zoomable = true;
    let bgColor = new am4core.InterfaceColorSet().getFor("background");

    // level 0 series template
    let level0SeriesTemplate = this.chart.seriesTemplates.create("0");
    let level0ColumnTemplate = level0SeriesTemplate.columns.template;

    level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level0ColumnTemplate.fillOpacity = 1;
    level0ColumnTemplate.strokeWidth = 1;
    level0ColumnTemplate.stroke = bgColor;

    let bullet0 = level0SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet0.locationY = 0.5;
    bullet0.locationX = 0.5;
    bullet0.label.text = "{name}";
    bullet0.label.fill = am4core.color("#ffffff");

    // level 1 series template
    let level1SeriesTemplate = this.chart.seriesTemplates.create("1");
    let level1ColumnTemplate = level1SeriesTemplate.columns.template;

    level1SeriesTemplate.tooltip.animationDuration = 0;
    level1SeriesTemplate.strokeOpacity = 1;

    level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10)
    level1ColumnTemplate.fillOpacity = 1;
    level1ColumnTemplate.strokeWidth = 1;
    level1ColumnTemplate.stroke = bgColor;

    let bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet1.locationY = 0.5;
    bullet1.locationX = 0.5;
    bullet1.label.text = "{name}";
    bullet1.label.fill = am4core.color("#ffffff");
    this.chart.maxLevels = 1;

    this.bldTitle();
  }

  private createDeepCopy(sourceObj: any): any {
    return JSON.parse(JSON.stringify(sourceObj));
  }

  private getJsonParsedData(sourceObj: any): any {
    return JSON.parse((sourceObj));
  }

  private strSlice(strValue: string): string {
    return strValue.slice(16, strValue.length);
  }

  private bldTitle() {
    let title = this.chart.titles.create();
    title.text = this.customProperties.titles[0].parsedText === "" ? "Title Left Blank" : this.customProperties.titles[0].parsedText;
    title.fontSize = this.customProperties.titles[0].size === "" ? this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].title.fontSize : this.customProperties.titles[0].size;
  }

  private loadData(vizSection: VizSectionsOfInterest): any {
    switch (vizSection) {
      case VizSectionsOfInterest.None: {
        return null;
      }
      case VizSectionsOfInterest.chartData: {
        return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].chartData;
      }
      case VizSectionsOfInterest.dataSeriesOrverRides: {
        return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].dataSeries.overRideSeries;
      }
      case VizSectionsOfInterest.entireVizualizer: {
        return this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx];
      }
    }
  }

  private getCustomProperties(): any {
    const customVisualizer = this.createDeepCopy(this.activeCfg.visualizerConfig.visualizers[this.activeVizIdx].customVisualizer);
    const propertiesCount = Object.keys(customVisualizer).length;
    let tempArr = new Array(propertiesCount - 1);

    for (let [key, value] of Object.entries(customVisualizer)) {
      if (key !== 'type') {
        let index = +this.strSlice(key);
        tempArr[index - 1] = value;
      }
    }

    let mergedJsonStringifyObj = '';

    tempArr.forEach(element => {
      mergedJsonStringifyObj = mergedJsonStringifyObj + element
    });

    return this.getJsonParsedData(mergedJsonStringifyObj);
  }
}