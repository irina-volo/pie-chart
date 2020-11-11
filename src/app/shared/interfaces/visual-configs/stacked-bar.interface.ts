 export interface IStackedBar {
  visualizerConfig: VisualizerConfig;
}

 interface VisualizerConfig {
  gridChartOrientation: string;
  gridChartOrder: string;
  chartLayout: string;
  visLayout: VisLayout;
  gridOptions: GridOptions;
  visualizers: Visualizer[];
}

 interface Visualizer {
  chartArea?: ChartArea;
  gridlinesConfig?: GridlinesConfig;
  title?: Title;
  caption?: Title;
  dataSeries?: DataSeries;
  trendLines?: ExpressionValueMap;
  legend?: Legend;
  axes?: Axes;
  chartLayout?: ChartLayout;
  chartConfiguaration?: ChartConfiguaration;
  chartData?: ChartDatum[];
  margin?: Margin;
  threeD?: ThreeD;
  drillOnDimension?: string;
  negativeColor?: NegativeColor;
  lineWidth?: number;
  useNegativeColorIfDown?: string;
  numberPrecision?: NumberPrecision;
  filterSelectedMembers?: any[];
  overlapBars?: boolean;
  reverseOrder?: boolean;
  plotAsDataTable?: string;
  showTableBorder?: string;
  hasPlotOtions?: boolean;
  decomTreeConfig?: ExpressionValueMap;
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
  type: string;
  runTimeVisIndex: number;
  gridLayout?: GridLayout;
  flattenedColumnHeader?: FlattenedColumnHeader;
  gridPageInfo?: GridPageInfo;
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
  'C5;C2;C3': string;
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
  expressionValueMap: ExpressionValueMap2;
}

 interface ExpressionValueMap2 {
  '{[R3,C2]}': string;
}

 interface Background {
  color: string;
  imageURL: string;
  opacity: number;
  margin: number;
}

 interface NumberPrecision {
  audienceTemplate: string;
  axis: string;
  default: string;
  label: string;
  tooltip: string;
}

 interface NegativeColor {
  fontColor: string;
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
}

 interface ChartConfiguaration {
  chartDisplayType: string;
}

 interface ChartLayout {
  pageaxis: any[];
  xaxis: any[];
  hidden: any[];
  legend: string[][];
  yaxis: string[][];
}

 interface Axes {
  xaxis: Xaxis;
  yaxis: Yaxis;
}

 interface Yaxis {
  axisTitle: AxisTitle;
  axisLabel: AxisLabel2;
  valueAxis: ValueAxis;
  isInverted: string;
  invertLabels: string;
  annotations: Annotation[];
  baseValue: number;
}

 interface Annotation {
  type: string;
  captionProperties: CaptionProperties;
  lineProperties: LineProperties;
}

 interface LineProperties {
  lineColor: string;
  lineThickness: number;
}

 interface CaptionProperties {
  label: string;
}

 interface ValueAxis {
  gradient: boolean;
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
  axisScale: AxisScale;
  axisMarker: string;
  lineThickness: number;
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

 interface AxisTitle {
  text: string;
  displayTitle: string;
  fontSize: string;
  fontColor: string;
  placement: string;
  fontType: string;
  textExpression: string;
  expressionValueMap: ExpressionValueMap;
}

 interface Legend {
  displayCommonLegend: string;
  display: string;
  displayBorder: string;
  wrapLegendText: string;
  legendStyle: LegendStyle;
  isReverse: string;
  isEqualWidths: string;
  verticalGap: number;
  horizontalGap: number;
  showColorRules: boolean;
}

 interface LegendStyle {
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  text: string;
  placement: string;
}

 interface DataSeries {
  displayBorder: string;
  displayMarkers: string;
  displayMouseOver: string;
  groupSmallerValues: boolean;
  groupAllValues: number;
  marker: string;
  pullOut: boolean;
  adjustmentBaseColor: ExpressionValueMap;
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
  label: string;
  position1: string;
  position2: string;
  tuple: Tuple2;
  isCustomColor: boolean;
}

 interface Tuple2 {
  members: Member2[];
}

 interface Member2 {
  id: string;
  name: string;
  fullPath: string;
  dimensionName: string;
}

 interface SeriesFormat {
  multiTone: boolean;
  color1: string;
  label: string;
  tuple: Tuple;
  isCustomColor: boolean;
}

 interface Tuple {
  members: Member[];
}

 interface Member {
  id: string;
  name: string;
  fullPath: string;
  dimensionName: string;
  level?: string;
}

 interface DataLabel {
  displayLabels: string;
  labelOrientation: string;
  fontStyle: string;
  fontSize: string;
  fontColor: string;
  displayTotal: string;
  totalOrientaion: string;
  displaySeriesName: boolean;
  bestFit: string;
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
  backgroundColor: string;
  multiTone: boolean;
  color1: string;
}

 interface GridOptions {
  columnTitle: string;
  rowTitle: string;
  expandCollapse: string;
  displayBanding: string;
  parentPosition: string;
  showAttributesafterMeasures: string;
  disableGridActions: string;
  allowIndexing: boolean;
  hideInnerBorder: boolean;
  outerBorderWidth: number;
  indent: string;
  rowIndent: string;
  generationStyles: string;
  preserveHierarchy: boolean;
  fontType: string;
  fontSize: number;
  fontColor: string;
  applyMemberColorToForeGround: boolean;
  textExpression: string;
  text: string;
  missingRows: string;
  missingColumns: string;
  zeroes: string;
  errors: string;
  customProperties: string;
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