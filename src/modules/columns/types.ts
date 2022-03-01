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