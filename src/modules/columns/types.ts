export enum ColumnType {
  TEXT = 2,
  RICHTEXT = "RICHTEXT",
  NUMBER = 9,
  EMAIL = "EMAIL",
  DATE = 4,
  PASSWORD = "PASSWORD",
  BOOLEAN = 8,
  LOOKUP = 7,
  MEDIA = "MEDIA",
  CALCULATED = 17,
  Invalid = 0,
  Integer = 1,
  Note = 3,
  Counter = 5,
  Choice = 6,
  Currency = 10,
  URL = 11,
  Computed = 12,
  Threading = 13,
  Guid = 14,
  MultiChoice = 15,
  GridChoice = 16,
  File = 18,
  Attachments = 19,
  User = 20,
  Recurrence = 21,
  CrossProjectLink = 22,
  ModStat = 23,
  Error = 24,
  ContentTypeId = 25,
  PageSeparator = 26,
  ThreadIndex = 27,
  WorkflowStatus = 28,
  AllDayEvent = 29,
  WorkflowEventType = 30,
  Geolocation = 31,
  OutcomeChoice = 32,
  MaxItems = 33
}

export interface Column {
  name: string;
  type: ColumnType;
}

export interface columnReducer {
  columnType: [
    {
      name?: string,
    }
  ]
}
// Styled Component Column Props
export interface columnThread {
  span?: string;
}
export interface tableBg {
  secondary?: boolean;
}
export interface columnData {
  flexDirection?: string;
}
export interface columnIcon {
  setBorder?: any;
  theme: any;
}

export interface ContentTableItemProps {
  border?: any;
  theme?: any;
}

export interface TableThreadsProps {
  bgColor?: any;
  theme?: any;
  span?; any;
}

