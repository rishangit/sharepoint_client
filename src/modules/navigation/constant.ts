import { AppRoutingFullPath } from '@app/const';

export interface MainNavigationItemType {
  text: string;
  url: string;
  id:string;
}

export const mainNavigation = (): Array<MainNavigationItemType> => {
  return [
    {
      text: 'Columns',
      id: 'columns',
      url: AppRoutingFullPath.COLUMNS_LIST,
    },
    {
      text: 'Tables',
      id: 'tables',
      url: AppRoutingFullPath.TABLE_LIST,
    },
  ];
};
