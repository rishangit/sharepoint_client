import { ColumnIcon } from '../columns.styled';
import { columnTypeProps } from '@modules/columns/manage/constant';
import { IconFa } from '@app/icons';

export const IconText = ({ keyIcon }) => {
  const { icon } = columnTypeProps.find(({ type }) => type === keyIcon)
  return (
    <ColumnIcon setBorder={true}>
        <IconFa icon={icon}/>
    </ColumnIcon>
  )
};

