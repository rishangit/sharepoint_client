import { ColumnType } from '@modules/columns/types';

export interface columnIconProps {
    type: ColumnType | string
  }
export  interface tableDataIconProps {
    type?: ColumnType | string
    span: string
    name: string
    children?: any
    bgColor?: boolean
}