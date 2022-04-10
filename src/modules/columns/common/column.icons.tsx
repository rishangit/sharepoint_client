import { FC } from 'react';
import * as SC from '../columns.styled';
import {
  faSpellCheck,
  faAt,
  faAlignLeft,
  faListOl,
  faUnlock,
  faCalendar,
  faToggleOn
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnType } from '@modules/columns/types';

interface columnIconProps {
  type: ColumnType
}
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
    default:
      icon = faSpellCheck;
  }
  return (
    <SC.ColumnIcon setBorder={true}>
      <FontAwesomeIcon icon={icon} />
    </SC.ColumnIcon>
  )
};

