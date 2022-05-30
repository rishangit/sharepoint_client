export enum ColumnType {
  TEXT = "TEXT",
  RICHTEXT = "RICHTEXT",
  NUMBER = "NUMBER",
  EMAIL = "EMAIL",
  DATE = "DATE",
  PASSWORD = "PASSWORD",
  BOOLEAN = "BOOLEAN",
  LOOKUP = "LOOKUP",
  MEDIA = "MEDIA",
  CALCULATED = "CALCULATED",
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
  span? : string;
}
export interface tableBg {
  secondary? : boolean;
}
export interface columnData {
  flexDirection? : string;
}
export interface columnIcon {
  setBorder? : any;
  theme : any;
}

export interface ContentTableItemProps {
  border? : any;
  theme?: any;
}

export interface TableThreadsProps {
  bgColor? : any;
  theme?: any;
  span?; any;
}

