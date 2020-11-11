import {VisualizerConfigs} from '../../enums'
 export interface IColumn {
  visualizerConfig: VisualizerConfig;
  type: VisualizerConfigs
}

 interface VisualizerConfig {
  gridChartOrientation: string;
  gridChartOrder: string;
  chartLayout: string;
  visLayout: VisLayout;
  visualizers: Visualizer[];
}

 interface Visualizer {
  type: string;
  textPaneData?: any;
  customVisualizer?: any;
  customData?: any;
  contentVizData?: any;
  evaluatedContentVizData?: any;
  httpImageUrl?: any;
  runTimeVisIndex: number;
  chartErrorMessage?: any;
  chartArea?: ChartArea;
  gridlinesConfig?: GridlinesConfig;
  title?: Title;
  caption?: Caption;
  dataSeries?: DataSeries;
  legendFormats?: any;
  trendLines?: TrendLines;
  legend?: Legend;
  axes?: Axes;
  chartLayout?: ChartLayout;
  chartConfiguaration?: ChartConfiguaration;
  chartData?: ChartDatum[];
  plotElements?: any;
  adjustmentSort?: any;
  chartDesignLayout?: any;
  margin?: Margin;
  threeD?: ThreeD;
  drillOnDimension?: string;
  negativeColor?: NegativeColor;
  zooming?: any;
  guide?: any;
  gradient?: any;
  lineWidth?: number;
  useNegativeColorIfDown?: string;
  numberPrecision?: NumberPrecision;
  filterSelectedMembers?: any[];
  histogramFilterMembers?: any;
  overlapBars?: boolean;
  reverseOrder?: boolean;
  iterate?: any;
  plotAsDataTable?: string;
  showTableBorder?: string;
  hasPlotOtions?: boolean;
  decomTreeConfig?: DecomTreeConfig;
  background?: Background;
  labels?: Labels;
  categoryAxis?: CategoryAxis;
  valueAxis?: ValueAxis2;
  chartMargin?: number;
  shadow?: string;
  scrollBar?: string;
  cursor?: string;
  runTimeOptions?: RunTimeOptions;
  benchmark?: boolean;
  alignZeroAxes?: boolean;
  applyGridFormat?: boolean;
  overrideMemberFormat?: boolean;
  gridLayout?: GridLayout;
  flattenedColumnHeader?: FlattenedColumnHeader;
  flattenedRowHeader?: any;
  gridPageInfo?: GridPageInfo;
  gridErrorMsg?: any;
}

 interface GridPageInfo {
  currentRowPageNum: number;
  currentColPageNum: number;
  totalRowPage: number;
  totalColPage: number;
  rowPerPage: number;
  colPerPage: number;
}

 interface FlattenedColumnHeader {
  'C1;C2;C3': string;
  'C4;C2;C3': string;
}

 interface GridLayout {
  rowaxis: string[];
  columnaxis: string[];
  pageaxis: string[];
}

 interface RunTimeOptions {
  applySort: boolean;
  switchLegend: boolean;
  switchVisualizer: boolean;
}

 interface ValueAxis2 {
  gradient: boolean;
  labelsInside: boolean;
  labelsPosition: string;
  borderRadius: number;
  opacity: number;
}

 interface CategoryAxis {
  labelsInside: boolean;
}

 interface Labels {
  label: string;
  font: string;
  size: number;
  color: string;
  positionX: string;
  positionY: string;
  labelExpression: string;
  expressionValueMap: ExpressionValueMap3;
}

 interface ExpressionValueMap3 {
  '{[R4,C1]}': string;
}

 interface Background {
  color: string;
  imageURL: string;
  opacity: number;
  margin: number;
}

 interface DecomTreeConfig {
  graph?: any;
  tree?: any;
}

 interface NumberPrecision {
  audienceTemplate: string;
  axis: string;
  default: string;
  label: string;
  tooltip: string;
}

 interface NegativeColor {
  fontType?: any;
  fontStyle?: any;
  fontSize?: any;
  fontColor: string;
  text?: any;
  placement?: any;
  textExpression?: any;
  expressionValueMap?: any;
}

 interface ThreeD {
  angle: string;
  depth3D: string;
}

 interface Margin {
  autoMargin: string;
  bottom: string;
  left: string;
  right: string;
  top: string;
}

 interface ChartDatum {
  uid: string;
  xid: string;
  bin: Bin[];
}

 interface Bin {
  lid: string;
  val: string;
  fmtdval: string;
  cellStyle?: any;
  cellProps?: any;
}

 interface ChartConfiguaration {
  chartDisplayType: string;
}

 interface ChartLayout {
  pageaxis: any[];
  xaxis: string[][];
  hidden: any[];
  legend: string[][];
  yaxis: any[];
}

 interface Axes {
  xaxis: Xaxis;
  yaxis: Yaxis;
}

 interface Yaxis {
  axisTitle: AxisTitle;
  axisLabel: AxisLabel2;
  valueAxis: ValueAxis;
  axisScale: AxisScale;
  axisMarker: string;
  logScale?: any;
  isInverted: string;
  invertLabels: string;
  markerSize: number;
  lineThickness: number;
  axisAlpha?: any;
  annotations: Annotation[];
  axisCross?: any;
  baseValue: number;
}

 interface Annotation {
  type: string;
  category?: any;
  toCategory?: any;
  angle?: any;
  toAngle?: any;
  value?: number;
  toValue?: number;
  percentValues?: any;
  captionProperties: CaptionProperties;
  lineProperties: LineProperties;
}

 interface LineProperties {
  lineAlpha?: any;
  lineColor: string;
  lineThickness: number;
  expand?: any;
  above?: any;
}

 interface CaptionProperties {
  position?: any;
  balloonText?: any;
  color?: any;
  label: string;
  fontSize?: any;
}

 interface AxisScale {
  intervalCount: number;
  autoScale: boolean;
  minScale: number;
  maxScale: number;
  dynamicScale: boolean;
  dynamicScaleValue: string;
  showAs: string;
  isInverted: string;
  invertLabels: string;
  linePattern: string;
  commonScale: boolean;
}

 interface ValueAxis {
  gradient: boolean;
  labelsInside?: any;
  labelsPosition?: any;
  borderRadius: number;
  opacity: number;
}

 interface AxisLabel2 {
  displayLabel: string;
  displayAxisLines: string;
  displayTicks: string;
  orientation: string;
  customAngleValue: string;
  wrapLabel: string;
  wrapLabelToRow: number;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  fontType: string;
  formatMaskName: string;
  formatMaskValue: string;
  reverseOrder: boolean;
  smoothLine: string;
  autoRotateCount: string;
  showMinValue: string;
  frequency: string;
  nestedLabels: boolean;
  isShowImage: boolean;
}

 interface Xaxis {
  axisTitle: AxisTitle;
  axisLabel: AxisLabel;
  valueAxis?: any;
  axisScale?: any;
  axisMarker?: any;
  logScale?: any;
  isInverted?: any;
  invertLabels?: any;
  markerSize?: any;
  lineThickness?: any;
  axisAlpha?: any;
  annotations?: any;
  axisCross?: any;
  baseValue?: any;
}

 interface AxisLabel {
  displayLabel: string;
  displayAxisLines: string;
  displayTicks: string;
  orientation: string;
  customAngleValue: string;
  wrapLabel: string;
  wrapLabelToRow: number;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  fontType: string;
  formatMaskName?: any;
  formatMaskValue?: any;
  reverseOrder: boolean;
  smoothLine: string;
  autoRotateCount: string;
  showMinValue: string;
  frequency: string;
  nestedLabels: boolean;
  isShowImage: boolean;
}

 interface AxisTitle {
  text: string;
  displayTitle: string;
  fontStyle?: any;
  fontSize: string;
  fontColor: string;
  placement: string;
  fontType: string;
  textExpression: string;
  expressionValueMap: ExpressionValueMap2;
}

 interface Legend {
  displayCommonLegend: string;
  display: string;
  displayBorder: string;
  wrapLegendText: string;
  legendStyle: LegendStyle;
  showHideLegends?: any;
  isReverse: string;
  isEqualWidths: string;
  verticalGap: number;
  horizontalGap: number;
  legendOverRides?: any;
  showColorRules: boolean;
}

 interface LegendStyle {
  fontType?: any;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  text: string;
  placement: string;
  textExpression?: any;
  expressionValueMap?: any;
}

 interface TrendLines {
  displayMedian: string;
  displayResidual: string;
  displayTrendLine: string;
  displayAverage: string;
}

 interface DataSeries {
  displayBorder: string;
  displayMarkers: string;
  displayMouseOver: string;
  groupSmallerValues: boolean;
  groupAllValues: number;
  marker: string;
  pullOut: boolean;
  title?: any;
  color?: any;
  adjustmentBaseColor: ExpressionValueMap2;
  dataLabel: DataLabel;
  seriesFormats: SeriesFormat[];
  overRideSeries: OverRideSery[];
  neck: Neck;
}

 interface Neck {
  height: string;
  width: string;
}

 interface OverRideSery {
  multiTone: boolean;
  color1: string;
  color2?: any;
  negativeColor?: any;
  label: string;
  position1: string;
  position2: string;
  mixOrientation?: any;
  tuple: Tuple2;
  conditions?: any;
  isCustomColor: boolean;
  plotAsDataTable?: any;
  plotAsChart?: any;
  showAs?: any;
  linePattern?: any;
}

 interface Tuple2 {
  members: Member2[];
}

 interface Member2 {
  id: string;
  name: string;
  fullPath: string;
  level?: any;
  dimensionName: string;
  functionName?: any;
  uid?: any;
}

 interface SeriesFormat {
  multiTone: boolean;
  color1: string;
  color2?: any;
  negativeColor?: any;
  label: string;
  position1?: any;
  position2?: any;
  mixOrientation?: any;
  tuple: Tuple;
  conditions?: any;
  isCustomColor: boolean;
  plotAsDataTable?: any;
  plotAsChart?: any;
  showAs?: any;
  linePattern?: any;
}

 interface Tuple {
  members: Member[];
}

 interface Member {
  id: string;
  name: string;
  fullPath: string;
  level?: string;
  dimensionName: string;
  functionName?: any;
  uid?: any;
}

 interface DataLabel {
  displayLabels: string;
  labelOrientation: string;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  fontType?: any;
  displayTotal: string;
  totalOrientaion: string;
  placement?: any;
  displaySeriesName: boolean;
  bestFit: string;
  titleFontStyle?: any;
  titleFontSize?: any;
  titleFontColor?: any;
  inside: string;
  rotate: string;
  distance: string;
  showTicks: string;
  hideLabelPercent: string;
  firstLast: string;
  highLow: string;
  pulloutSlices: string;
  pulloutOnlyOne: string;
  innerRadius: string;
  showMemberLabels: boolean;
}

 interface Caption {
  fontType: string;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  text: string;
  placement: string;
  textExpression: string;
  expressionValueMap: ExpressionValueMap2;
}

 interface ExpressionValueMap2 {
}

 interface Title {
  fontType: string;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  text: string;
  placement: string;
  textExpression: string;
  expressionValueMap: ExpressionValueMap;
}

 interface ExpressionValueMap {
  '{[R3,C1]}': string;
  '{Product [selected][name]}': string;
  '{Time [selected][name]}': string;
}

 interface GridlinesConfig {
  barWidth: string;
  displayGridlines: string;
  gridLineOption: string;
  displayBorder: string;
  gridLineType: string;
  displayChartComments: string;
}

 interface ChartArea {
  multiTone: boolean;
  color1: string;
  color2?: any;
  mixOrientation?: any;
  position1?: any;
  position2?: any;
  backgroundColor: string;
}

 interface VisLayout {
  template: string;
  coordinates: Coordinate[];
  splitter: any[];
}

 interface Coordinate {
  width: string;
  height: string;
  left: string;
  top: string;
  index: string;
}