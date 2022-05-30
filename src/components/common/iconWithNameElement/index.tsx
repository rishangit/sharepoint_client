import { FC } from 'react';
import * as SC from './iconWithNameElement.styled';
import {
  faSpellCheck,
  faAt,
  faAlignLeft,
  faListOl,
  faUnlock,
  faCalendar,
  faToggleOn,
  faColumns,
  faFileImage,
  faFileExcel,
  faCodeFork
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { columnIconProps, tableDataIconProps } from 'app-interface'
import { ColumnType } from '@modules/columns/types';


export const ColumnIcon: FC<columnIconProps> = ({ type }) => {
  let icon;
  switch (type) {
    case ColumnType.TEXT:
      icon = faSpellCheck;
      break;
    case ColumnType.NUMBER:
      icon = faListOl;
      break;
    case ColumnType.RICHTEXT:
      icon = faAlignLeft;
      break;
    case ColumnType.EMAIL:
      icon = faAt;
      break;
    case ColumnType.PASSWORD:
      icon = faUnlock;
      break;
    case ColumnType.BOOLEAN:
      icon = faToggleOn;
      break;
    case ColumnType.DATE:
      icon = faCalendar;
      break;
    case ColumnType.LOOKUP:
      icon = faColumns;
      break;
    case ColumnType.MEDIA:
      icon = faFileImage;
      break;
    case ColumnType.CALCULATED:
      icon = faFileExcel;
      break;
    case 'CONTENT':
      icon = faCodeFork;
      break;
    default:
      icon = faSpellCheck;
  }
  return (
    <SC.ColumnIcon setBorder={true}>
      <FontAwesomeIcon icon={icon} />
    </SC.ColumnIcon>
  )
};

export const TableDataIcon: FC<tableDataIconProps> = ({span, type, name, children, bgColor}) => {
  // console.log('children', props)
  return (
    // 
    <SC.TableThreads span={span} bgColor={bgColor}>
      <ColumnIcon type={type} />
      <h6 style={{ margin: 0 }}>
        {name}
      </h6>
      {children}
    </SC.TableThreads>
  )
}


