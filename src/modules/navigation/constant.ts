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
      text: 'Column Groups',
      id: 'groups',
      url: AppRoutingFullPath.GROUPS_LIST,
    },
    {
      text: 'Content Types',
      id: 'contentTypes',
      url: AppRoutingFullPath.CONTENT_TYPES_LIST,
    },
    {
      text: 'Lists',
      id: 'tables',
      url: AppRoutingFullPath.TABLES_LIST,
    },  

  ];
};
