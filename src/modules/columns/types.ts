export enum ColumnType {
  TEXT = "TEXT",
  NUMBER = "NUMBER",
  RICHTEXT = "RICHTEXT",
  EMAIL = "EMAIL",
  DATE = "DATE",
  PASSWORD = "PASSWORD",
  BOOLEAN = "BOOLEAN",
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
export interface columnData {
  flexDirection? : string;
}
export interface columnIcon {
  setBorder? : any;
  theme : any;
}
