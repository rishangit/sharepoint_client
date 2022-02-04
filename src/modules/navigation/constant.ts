import { AppRoutingFullPath } from '@app/const';

export interface MainNavigationItemType {
  text: string;
  url: string;
}

export const mainNavigation = (): Array<MainNavigationItemType> => {
  return [
    {
      text: 'Columns',
      url: AppRoutingFullPath.COLUMNS_LIST,
    },
  ];
};
