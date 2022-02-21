export enum ColumnType {
  TEXT = "TEXT",
  NUMBER = "NUMBER",
}

export interface Column {
  name: string;
  type: ColumnType;
}
